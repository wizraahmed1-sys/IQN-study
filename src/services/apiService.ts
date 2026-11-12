import { AppSettings } from '../types';

export const DEFAULT_SETTINGS: AppSettings = {
  webhookUrl: "https://maazaiwala.app.n8n.cloud/webhook-test/ff0cbc1f-dacb-42d6-b0fc-42f939f9807a",
  geminiApiKey: "AQ.Ab8RN6KF4PiAHd_Gx6QD078D0p8o-dMMN0CVYte0bqOWk5a66Q",
  geminiModel: "gemini-2.5-flash",
  studentName: "Ammar / Batch 7 Scholar",
  darkMode: false,
};

const SETTINGS_KEY = 'iq_navigators_batch7_settings';

export function getStoredSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings to localStorage:', e);
  }
}

export interface TutorResponseResult {
  success: boolean;
  response?: string;
  inactive?: boolean;
  error?: string;
}

/**
 * AI TUTOR: Strictly powered by n8n Webhook.
 * Relays chat question to backend /api/tutor-webhook (which contacts n8n).
 * If inactive/failed, returns standard warning. NEVER falls back to Gemini.
 */
export async function sendTutorQuery(
  question: string,
  history: Array<{ sender: string; text: string }>,
  settings: AppSettings
): Promise<TutorResponseResult> {
  const payload = {
    webhookUrl: settings.webhookUrl,
    question,
    studentName: settings.studentName,
    timestamp: new Date().toISOString(),
    history
  };

  try {
    const res = await fetch('/api/tutor-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      return {
        success: false,
        inactive: true,
        error: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
      };
    }

    const data = await res.json();
    if (data.inactive || !data.success) {
      return {
        success: false,
        inactive: true,
        error: data.error || "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
      };
    }

    return {
      success: true,
      response: data.response
    };
  } catch (err: any) {
    // If backend isn't reached (e.g. running on standalone Vite preview), try direct n8n POST
    try {
      const directRes = await fetch(settings.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: "ai_tutor_query",
          question,
          studentName: settings.studentName,
          timestamp: new Date().toISOString(),
          history
        })
      });

      if (!directRes.ok) throw new Error('Direct webhook failed');
      const text = await directRes.text();
      return { success: true, response: text };
    } catch (directErr) {
      return {
        success: false,
        inactive: true,
        error: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
      };
    }
  }
}

/**
 * AI CHECKER & EXAMINER: Strictly powered by Google Gemini.
 * Evaluates student written responses or quiz explanations against CIE 1123 rubrics.
 */
export async function checkStudentWork(params: {
  text?: string;
  images?: Array<{ data: string; mimeType: string }>;
  promptTitle?: string;
  promptType?: string;
  wordTarget?: string;
  mode?: 'composition' | 'quiz_explanation' | 'homework';
  questionContext?: string;
  dayNumber?: number;
  settings: AppSettings;
}): Promise<{ success: boolean; feedback?: string; error?: string }> {
  const payload = {
    text: params.text || '',
    images: params.images || [],
    promptTitle: params.promptTitle,
    promptType: params.promptType,
    wordTarget: params.wordTarget,
    mode: params.mode || 'composition',
    questionContext: params.questionContext,
    dayNumber: params.dayNumber,
    apiKey: params.settings.geminiApiKey,
    model: params.settings.geminiModel
  };

  try {
    const res = await fetch('/api/check-work', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return { success: true, feedback: data.feedback };
      }
    }
  } catch (backendErr) {
    // Fall back to direct Gemini call if backend is unavailable
  }

  // Direct client-side call to Gemini REST API as a robust fallback
  try {
    const systemInstruction = "You are a strict, constructive Cambridge O Level English (CIE 1123) examiner evaluating a Pre O Levels Batch 7 student's written response. Provide Band Score/Marks, Content & Register analysis, Structure & S.E.E.L. adherence, line-by-line grammar/spelling corrections, and encouraging next-draft tips.";
    
    let userPrompt = "";
    if (params.mode === 'quiz_explanation') {
      userPrompt = `Evaluate this Pre O Level Batch 7 student's typed reasoning for a Cambridge CIE 1123 objective question:
Context / Question: ${params.questionContext || 'Cambridge Grammar / Vocabulary Question'}
Student's Typed Explanation:
"""
${params.text || ''}
"""

Please grade this explanation on:
1. Grammatical accuracy & linguistic justification
2. Precision in citing Cambridge English rules
3. Award a Mark (e.g. 5/5, 4/5) and give 2-3 constructive sentences of feedback.`;
    } else if (params.mode === 'homework') {
      userPrompt = `You are evaluating a Pre O Levels Batch 7 student's daily homework submission for Cambridge O Level English (CIE 1123).
${params.dayNumber ? `Curriculum Day: Day ${params.dayNumber}` : ''}
Task Title: ${params.promptTitle || 'Daily Written Homework (200 Words Creative Writing)'}
Target Word Limit: ${params.wordTarget || '200 words'}

${params.images && params.images.length > 0 ? `The student has attached ${params.images.length} photographed page(s) of their homework/handwritten work. Carefully transcribe and examine the written text from the attached images.` : ''}
${params.text ? `Student's Typed Work:\n"""\n${params.text}\n"""` : ''}

Please provide an in-depth, structured Cambridge Examiner Homework Assessment:
1. ✅ **Homework Correctness & Verification**: Explicitly check whether the student's homework is correct, addresses all parts of the daily prompt, and satisfies Cambridge criteria.
2. 🎖️ **Band Score & Estimated Numerical Marks** (Assign Band 1 to Band 6 and score out of 25 or 30).
3. 📝 **Word Count & Creativity Analysis**: Review adherence to the 200-word creative writing limit, sensory immersion, and vocabulary precision.
4. 🔍 **Line-by-Line Grammar, Spelling & Concord Corrections**: Quote specific phrases from their homework and provide standard Cambridge corrections.
5. 🚀 **Next-Draft Recommendations**: 3 targeted tips for elevating this response to top distinction grade.`;
    } else {
      userPrompt = `Please evaluate the following written response by a Cambridge O Level English (CIE 1123) Pre O Levels Batch 7 student:
Task Type: ${params.promptType || 'Subjective Writing'}
Prompt: ${params.promptTitle || 'Continuous / Directed Writing'}
Target Word Limit: ${params.wordTarget || 'Target standard limit'}

${params.images && params.images.length > 0 ? `The student has uploaded ${params.images.length} handwritten or typed page(s). Examine the attached images directly.` : ''}
${params.text ? `Student Response:\n"""\n${params.text}\n"""` : ''}

Please provide a structured, formatted Cambridge Examiner Evaluation Report including:
1. 🎖️ **Band Score & Estimated Numerical Marks** (e.g., Band 1 / Band 2, Marks out of 25 or 35 according to CIE 1123 rubric).
2. 📋 **Content, Tone & Register Analysis** (Task fulfillment, audience awareness, vocabulary sophistication).
3. 🧱 **Structure & S.E.E.L. Adherence** (Topic sentences, elaboration, concrete examples, and link sentences).
4. 🔍 **Line-by-Line Grammar, Syntax & Spelling Corrections** (Highlight exact quotes from the text, pinpoint errors such as comma splices, tense shifts, or concord slips, and show the Cambridge-approved correction).
5. 🚀 **Actionable Next-Draft Recommendations** (3 targeted tips for elevating this response into top Band 1).`;
    }

    const geminiParts: any[] = [{ text: `${systemInstruction}\n\n${userPrompt}` }];
    if (params.images && params.images.length > 0) {
      for (const img of params.images) {
        const cleanBase64 = img.data.replace(/^data:[a-zA-Z0-9/+-]+;base64,/, '');
        geminiParts.push({
          inlineData: {
            mimeType: img.mimeType,
            data: cleanBase64
          }
        });
      }
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${params.settings.geminiModel}:generateContent?key=${params.settings.geminiApiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: geminiParts
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2500,
        }
      })
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return { success: false, error: `Gemini API returned status ${geminiRes.status}: ${errText.slice(0, 100)}. Please check your Gemini API key in Settings.` };
    }

    const geminiData = await geminiRes.json();
    const candidateText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return { success: true, feedback: candidateText };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to connect to Gemini API.' };
  }
}

/**
 * Dispatches quiz completion log to webhook
 */
export async function logQuizCompletion(
  details: { score: number; total: number; percentage: number; category: string },
  settings: AppSettings
): Promise<void> {
  const payload = {
    webhookUrl: settings.webhookUrl,
    studentName: settings.studentName,
    timestamp: new Date().toISOString(),
    details
  };

  try {
    await fetch('/api/quiz-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    // Silently continue
  }
}

/**
 * Ping test for Webhook connectivity
 */
export async function testWebhookConnection(webhookUrl: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch('/api/test-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ webhookUrl })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // fallback direct
  }

  try {
    const direct = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'ping', test: true })
    });
    return {
      success: direct.ok,
      message: direct.ok ? `Webhook reachable! Status ${direct.status}` : `Webhook returned ${direct.status}`
    };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to reach webhook URL.' };
  }
}

/**
 * Test Gemini API connection
 */
export async function testGeminiConnection(apiKey: string, model: string): Promise<{ success: boolean; message: string }> {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Respond with the word "CONNECTED" only.' }] }],
        generationConfig: { maxOutputTokens: 10 }
      })
    });
    if (res.ok) {
      return { success: true, message: `Successfully connected to Gemini (${model})!` };
    }
    const err = await res.text();
    return { success: false, message: `Gemini error ${res.status}: ${err.slice(0, 150)}` };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to connect to Gemini API.' };
  }
}
