import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Helper to extract text from n8n response safely
function parseN8nResponse(data: any): string {
  if (typeof data === 'string') return data;
  if (!data) return '';
  if (Array.isArray(data) && data.length > 0) {
    return parseN8nResponse(data[0]);
  }
  if (typeof data === 'object') {
    if (data.response) return parseN8nResponse(data.response);
    if (data.output) return parseN8nResponse(data.output);
    if (data.message) return parseN8nResponse(data.message);
    if (data.text) return parseN8nResponse(data.text);
    if (data.data) return parseN8nResponse(data.data);
    if (data.content) return parseN8nResponse(data.content);
    return JSON.stringify(data, null, 2);
  }
  return String(data);
}

// 1. POST /api/tutor-webhook (Relays chat questions to n8n webhook)
app.post('/api/tutor-webhook', async (req: Request, res: Response) => {
  try {
    const { webhookUrl, question, studentName, timestamp, history, event } = req.body;
    const targetUrl = webhookUrl || "https://maazaiwala.app.n8n.cloud/webhook-test/ff0cbc1f-dacb-42d6-b0fc-42f939f9807a";

    const payload = {
      event: event || "ai_tutor_query",
      question,
      studentName: studentName || "Batch 7 Student",
      timestamp: timestamp || new Date().toISOString(),
      history: history || []
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout

    let n8nRes: globalThis.Response;
    try {
      n8nRes = await fetch(targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      console.warn('n8n webhook fetch error:', fetchErr?.message);
      return res.status(200).json({
        success: false,
        inactive: true,
        error: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
      });
    }

    clearTimeout(timeoutId);

    if (!n8nRes.ok) {
      console.warn(`n8n responded with status ${n8nRes.status}`);
      return res.status(200).json({
        success: false,
        inactive: true,
        error: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
      });
    }

    const contentType = n8nRes.headers.get('content-type') || '';
    let parsedText = '';

    if (contentType.includes('application/json')) {
      const jsonData = await n8nRes.json();
      parsedText = parseN8nResponse(jsonData);
    } else {
      parsedText = await n8nRes.text();
    }

    if (!parsedText || parsedText.trim() === '') {
      parsedText = "Received empty response from n8n webhook. Please ensure your workflow node returns a valid response.";
    }

    return res.status(200).json({
      success: true,
      response: parsedText
    });
  } catch (err: any) {
    console.error('Server error handling tutor webhook:', err);
    return res.status(200).json({
      success: false,
      inactive: true,
      error: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses."
    });
  }
});

// 2. POST /api/check-work (Relays text & image homework evaluation to Gemini API)
app.post('/api/check-work', async (req: Request, res: Response) => {
  try {
    const {
      text,
      images, // Optional array of { data: string, mimeType: string } for 2-page homework uploads
      promptTitle,
      promptType,
      wordTarget,
      apiKey,
      model = 'gemini-2.5-flash',
      mode = 'composition', // 'composition' | 'quiz_explanation' | 'homework'
      questionContext,
      dayNumber
    } = req.body;

    const geminiKey = apiKey || process.env.GEMINI_API_KEY || "AQ.Ab8RN6KF4PiAHd_Gx6QD078D0p8o-dMMN0CVYte0bqOWk5a66Q";

    const hasText = Boolean(text && text.trim().length > 0);
    const hasImages = Boolean(Array.isArray(images) && images.length > 0);

    if (!hasText && !hasImages) {
      return res.status(400).json({ success: false, error: 'No text or uploaded homework pages provided to evaluate.' });
    }

    const systemInstruction = "You are a strict, constructive Cambridge O Level English (CIE 1123) examiner evaluating a Pre O Levels Batch 7 student's written response. Provide Band Score/Marks, Content & Register analysis, Structure & S.E.E.L. adherence, line-by-line grammar/spelling corrections, and encouraging next-draft tips.";

    let userPrompt = "";

    if (mode === 'quiz_explanation') {
      userPrompt = `Evaluate this Pre O Level Batch 7 student's typed reasoning for a Cambridge CIE 1123 objective question:
Context / Question: ${questionContext || 'Cambridge Grammar / Vocabulary Question'}
Student's Typed Explanation:
"""
${text}
"""

Please grade this explanation on:
1. Grammatical accuracy & linguistic justification
2. Precision in citing Cambridge English rules
3. Award a Mark (e.g. 5/5, 4/5, etc.) and give 2-3 constructive sentences of feedback.`;
    } else if (mode === 'homework') {
      userPrompt = `You are evaluating a Pre O Levels Batch 7 student's daily homework submission for Cambridge O Level English (CIE 1123).
${dayNumber ? `Curriculum Day: Day ${dayNumber}` : ''}
Task Title: ${promptTitle || 'Daily Written Homework (200 Words Creative Writing)'}
Target Word Limit: ${wordTarget || '200 words'}

${hasImages ? `The student has attached ${images.length} photographed page(s) of their homework/handwritten work. Carefully transcribe and examine the written text from the attached images.` : ''}
${hasText ? `Student's Typed Work:\n"""\n${text}\n"""` : ''}

Please provide an in-depth, structured Cambridge Examiner Homework Assessment:
1. ✅ **Homework Correctness & Verification**: Explicitly check whether the student's homework is correct, addresses all parts of the daily prompt, and satisfies Cambridge criteria.
2. 🎖️ **Band Score & Estimated Numerical Marks** (Assign Band 1 to Band 6 and score out of 25 or 30).
3. 📝 **Word Count & Creativity Analysis**: Review adherence to the 200-word creative writing limit, sensory immersion, and vocabulary precision.
4. 🔍 **Line-by-Line Grammar, Spelling & Concord Corrections**: Quote specific phrases from their homework and provide standard Cambridge corrections.
5. 🚀 **Next-Draft Recommendations**: 3 targeted tips for elevating this response to top distinction grade.`;
    } else {
      userPrompt = `Please evaluate the following written work by a Cambridge O Level English (CIE 1123) Pre O Levels Batch 7 student:
Task Type: ${promptType || 'Subjective Writing'}
Prompt: ${promptTitle || 'Continuous / Directed Writing'}
Target Word Limit: ${wordTarget || 'Target standard limit'}

${hasImages ? `The student has uploaded ${images.length} handwritten or typed page(s) of their composition. Examine the attached images directly.` : ''}
${hasText ? `Student Response:\n"""\n${text}\n"""` : ''}

Please provide a structured, formatted Cambridge Examiner Evaluation Report including:
1. 🎖️ **Band Score & Estimated Numerical Marks** (e.g., Band 1 / Band 2, Marks out of 25 or 35 according to CIE 1123 rubric).
2. 📋 **Content, Tone & Register Analysis** (Task fulfillment, audience awareness, vocabulary sophistication).
3. 🧱 **Structure & S.E.E.L. Adherence** (Topic sentences, elaboration, concrete examples, and link sentences).
4. 🔍 **Line-by-Line Grammar, Syntax & Spelling Corrections** (Highlight exact quotes from the text, pinpoint errors such as comma splices, tense shifts, or concord slips, and show the Cambridge-approved correction).
5. 🚀 **Actionable Next-Draft Recommendations** (3 targeted tips for elevating this response into top Band 1).`;
    }

    // Build Gemini multimodal parts
    const parts: any[] = [{ text: `${systemInstruction}\n\n${userPrompt}` }];

    if (hasImages) {
      for (const img of images) {
        if (img.data && img.mimeType) {
          const cleanBase64 = img.data.replace(/^data:[a-zA-Z0-9/+-]+;base64,/, '');
          parts.push({
            inlineData: {
              mimeType: img.mimeType,
              data: cleanBase64
            }
          });
        }
      }
    }

    // Call Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2500,
        }
      })
    });

    if (!geminiResponse.ok) {
      const errBody = await geminiResponse.text();
      console.error('Gemini API Error:', geminiResponse.status, errBody);
      return res.status(200).json({
        success: false,
        error: `Gemini API returned status ${geminiResponse.status}. Please verify your API key in Settings.`
      });
    }

    const geminiData = await geminiResponse.json();
    const candidateText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!candidateText) {
      return res.status(200).json({
        success: false,
        error: 'Gemini returned an empty response. Please check prompt content.'
      });
    }

    return res.status(200).json({
      success: true,
      feedback: candidateText
    });
  } catch (err: any) {
    console.error('Server error calling Gemini:', err);
    return res.status(500).json({
      success: false,
      error: err?.message || 'Internal server error while evaluating text.'
    });
  }
});

// 3. POST /api/test-webhook (Tests webhook connectivity)
app.post('/api/test-webhook', async (req: Request, res: Response) => {
  try {
    const { webhookUrl } = req.body;
    const targetUrl = webhookUrl || "https://maazaiwala.app.n8n.cloud/webhook-test/ff0cbc1f-dacb-42d6-b0fc-42f939f9807a";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const testRes = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'ping',
        studentName: 'IQ Navigator System Test',
        timestamp: new Date().toISOString()
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (testRes.ok) {
      return res.status(200).json({
        success: true,
        message: `Webhook is reachable and responded with status ${testRes.status}.`
      });
    } else {
      return res.status(200).json({
        success: false,
        message: `Webhook returned status ${testRes.status}. Make sure the n8n workflow is active.`
      });
    }
  } catch (err: any) {
    return res.status(200).json({
      success: false,
      message: `Failed to reach webhook: ${err.message || 'Connection refused or timed out'}`
    });
  }
});

// 4. POST /api/quiz-log (Dispatches quiz completion event)
app.post('/api/quiz-log', async (req: Request, res: Response) => {
  try {
    const { webhookUrl, studentName, timestamp, details } = req.body;
    const targetUrl = webhookUrl || "https://maazaiwala.app.n8n.cloud/webhook-test/ff0cbc1f-dacb-42d6-b0fc-42f939f9807a";

    const payload = {
      event: "quiz_completed",
      studentName: studentName || "Batch 7 Student",
      timestamp: timestamp || new Date().toISOString(),
      details: details || {}
    };

    fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(e => console.warn('Quiz log background fetch error:', e.message));

    return res.status(200).json({ success: true, message: 'Quiz event dispatched to webhook.' });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Start Express with Vite dev server in dev mode, or static file serve in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use((_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 IQ Navigators Server running at http://localhost:${PORT}`);
  });
}

startServer();
