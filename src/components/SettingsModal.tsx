import React, { useState } from 'react';
import { 
  X, 
  Key, 
  Cpu, 
  Globe, 
  User, 
  Moon, 
  Sun, 
  Copy, 
  Check, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Loader2,
  CheckCircle2,
  AlertCircle,
  FileCode
} from 'lucide-react';
import { AppSettings } from '../types';
import { testGeminiConnection, testWebhookConnection } from '../services/apiService';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onSaveSettings: (newSettings: AppSettings) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  onResetProgress
}) => {
  const [formData, setFormData] = useState<AppSettings>(settings);
  const [showApiKey, setShowApiKey] = useState<boolean>(false);

  // Test connection states
  const [testingGemini, setTestingGemini] = useState<boolean>(false);
  const [geminiStatus, setGeminiStatus] = useState<{ success: boolean; message: string } | null>(null);

  const [testingWebhook, setTestingWebhook] = useState<boolean>(false);
  const [webhookStatus, setWebhookStatus] = useState<{ success: boolean; message: string } | null>(null);

  const [copiedScript, setCopiedScript] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveSettings(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  const handleTestGemini = async () => {
    setTestingGemini(true);
    setGeminiStatus(null);
    try {
      const result = await testGeminiConnection(formData.geminiApiKey, formData.geminiModel);
      setGeminiStatus(result);
    } catch (e: any) {
      setGeminiStatus({ success: false, message: e.message || 'Connection failed' });
    } finally {
      setTestingGemini(false);
    }
  };

  const handleTestWebhook = async () => {
    setTestingWebhook(true);
    setWebhookStatus(null);
    try {
      const result = await testWebhookConnection(formData.webhookUrl);
      setWebhookStatus(result);
    } catch (e: any) {
      setWebhookStatus({ success: false, message: e.message || 'Webhook ping failed' });
    } finally {
      setTestingWebhook(false);
    }
  };

  const googleAppsScriptCode = `function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append row with timestamp, student name, event type, and details
    sheet.appendRow([
      new Date(),
      data.studentName || "Anonymous",
      data.event || "unknown_event",
      JSON.stringify(data.details || {})
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(googleAppsScriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-xl text-slate-900 dark:text-white">
                Platform Credentials & Settings
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pre-configured keys saved in your browser localStorage
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="space-y-5 text-xs sm:text-sm">
          {/* 1. Student Name */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-500" />
              <span>Student Profile Name:</span>
            </label>
            <input
              type="text"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* 2. Gemini API Key */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Key className="w-4 h-4 text-cyan-500" />
                <span>Google Gemini API Key (Strictly for AI Checker & Examiner):</span>
              </label>
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
              >
                {showApiKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showApiKey ? 'Hide' : 'Show'}</span>
              </button>
            </div>

            <div className="flex gap-2">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={formData.geminiApiKey}
                onChange={(e) => setFormData({ ...formData, geminiApiKey: e.target.value })}
                className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 font-mono text-xs text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleTestGemini}
                disabled={testingGemini}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                {testingGemini ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Test Connection'}
              </button>
            </div>

            {geminiStatus && (
              <div
                className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                  geminiStatus.success
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}
              >
                {geminiStatus.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{geminiStatus.message}</span>
              </div>
            )}
          </div>

          {/* 3. Gemini Model Selector */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-500" />
              <span>Gemini Model:</span>
            </label>
            <select
              value={formData.geminiModel}
              onChange={(e) => setFormData({ ...formData, geminiModel: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
            >
              <option value="gemini-2.5-flash">gemini-2.5-flash (Recommended default: lightning fast)</option>
              <option value="gemini-2.5-pro">gemini-2.5-pro (Complex reasoning & strict grading)</option>
              <option value="gemini-3.8-flash">gemini-3.8-flash (Latest high-speed model)</option>
            </select>
          </div>

          {/* 4. n8n Webhook URL */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>n8n Webhook URL (Strictly for Bottom-Left AI Tutor & Quiz Logging):</span>
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={formData.webhookUrl}
                onChange={(e) => setFormData({ ...formData, webhookUrl: e.target.value })}
                className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 font-mono text-xs text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleTestWebhook}
                disabled={testingWebhook}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
              >
                {testingWebhook ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Send Test Ping'}
              </button>
            </div>

            {webhookStatus && (
              <div
                className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
                  webhookStatus.success
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}
              >
                {webhookStatus.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{webhookStatus.message}</span>
              </div>
            )}
          </div>

          {/* 5. Theme Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">Theme Appearance</span>
              <span className="text-xs text-slate-500">Toggle between Light Mode (#FAFAF8) and Dark Mode (#0B0F19)</span>
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, darkMode: !formData.darkMode })}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold"
            >
              {formData.darkMode ? (
                <>
                  <Moon className="w-4 h-4 text-emerald-400" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* 6. Copyable Google Apps Script Snippet */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-emerald-500" />
                <span>Google Apps Script doPost(e) Snippet for Google Sheets:</span>
              </span>
              <button
                type="button"
                onClick={handleCopyScript}
                className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedScript ? 'Copied' : 'Copy Script'}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-200 p-3.5 rounded-2xl font-mono text-[11px] overflow-x-auto max-h-36">
              {googleAppsScriptCode}
            </pre>
          </div>

          {/* 7. Reset Progress Button */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="font-bold text-rose-600 dark:text-rose-400 block text-xs">Reset All Student Progress</span>
              <span className="text-[11px] text-slate-500">Clears syllabus checklist, learned vocabulary, and quiz attempts</span>
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all syllabus checkmarks and learned vocabulary?')) {
                  onResetProgress();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-brand-emerald to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 shadow-md transition-all flex items-center gap-1.5"
          >
            {saveSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Saved!</span>
              </>
            ) : (
              <span>Save & Apply Settings</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
