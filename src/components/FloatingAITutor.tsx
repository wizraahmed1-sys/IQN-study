import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Copy, 
  Check, 
  Trash2, 
  Minimize2, 
  Maximize2, 
  Loader2, 
  Bot
} from 'lucide-react';
import { AppSettings, ChatMessage } from '../types';
import { sendTutorQuery } from '../services/apiService';
import { MarkdownView } from './MarkdownView';

interface FloatingAITutorProps {
  settings: AppSettings;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  preloadedQuery?: string;
}

export const FloatingAITutor: React.FC<FloatingAITutorProps> = ({
  settings,
  isOpen,
  onClose,
  onOpen,
  preloadedQuery
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: "👋 Assalam-o-Alaikum! I am your **IQ Navigators AI Tutor**, connected to your active n8n learning workflow. Ask me any question regarding Cambridge O Level English (CIE 1123), syllabus rules, vocabulary nuances, or essay formatting!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [webhookActiveStatus, setWebhookActiveStatus] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Handle preloaded query from other sections (e.g., "Test Me with AI" or Word of the Day)
  useEffect(() => {
    if (preloadedQuery && preloadedQuery.trim() !== '') {
      onOpen();
      setIsMinimized(false);
      handleSendMessage(preloadedQuery);
    }
  }, [preloadedQuery]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Format recent history
    const historyPayload = messages.slice(-6).map((m) => ({
      sender: m.sender,
      text: m.text
    }));

    try {
      const res = await sendTutorQuery(text, historyPayload, settings);

      if (res.success && res.response) {
        setWebhookActiveStatus(true);
        const tutorReply: ChatMessage = {
          id: `tutor-${Date.now()}`,
          sender: 'tutor',
          text: res.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, tutorReply]);
      } else {
        // STRICT RULE: If webhook is inactive or fails, display error notice. DO NOT answer with Gemini.
        setWebhookActiveStatus(false);
        const errorReply: ChatMessage = {
          id: `error-${Date.now()}`,
          sender: 'system',
          text: res.error || "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true
        };
        setMessages((prev) => [...prev, errorReply]);
      }
    } catch (e: any) {
      setWebhookActiveStatus(false);
      const errorReply: ChatMessage = {
        id: `error-${Date.now()}`,
        sender: 'system',
        text: "⚠️ Webhook is currently inactive or not responding. Please make sure your n8n workflow is active and listening to receive responses.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'tutor',
        text: "Chat cleared. What Cambridge English topic can I assist you with today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const suggestionChips = [
    "Explain the S.E.E.L. formula with a new example",
    "How do I avoid comma splices in complex sentences?",
    "Give me 3 tricky homophone pairs tested in CIE 1123",
    "Check my formal letter opening for tone and register"
  ];

  return (
    <>
      {/* 
        STRICTLY FIXED IN BOTTOM-LEFT CORNER (bottom-6 left-6, z-50)
      */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            type="button"
            onClick={onOpen}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark text-white shadow-2xl border-2 border-emerald-500/50 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all cursor-pointer animate-pulse-glow"
            aria-label="Open AI Tutor Chat"
          >
            {/* Pulsating Glowing Gradient Circle */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-brand-emerald via-teal-500 to-brand-cyan shadow-lg shadow-emerald-500/40">
              <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
            </div>

            <div className="text-left pr-2">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-sm tracking-tight text-white">
                  AI Tutor
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-[10px] text-emerald-300 font-medium">
                n8n Webhook Live
              </p>
            </div>
          </button>
        </div>
      )}

      {/* CHAT WINDOW (FIXED BOTTOM-LEFT) */}
      {isOpen && (
        <div
          className={`fixed bottom-6 left-6 z-50 flex flex-col bg-white dark:bg-[#111827] border-2 border-emerald-500/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isMinimized
              ? 'w-80 h-16'
              : 'w-[92vw] sm:w-[440px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Header Bar */}
          <div className="p-4 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark text-white flex items-center justify-between border-b border-emerald-500/20 select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-black text-sm text-white flex items-center gap-2">
                  <span>IQ Navigators Tutor</span>
                </h3>
                {/* Live Status Chip */}
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      webhookActiveStatus ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                    }`}
                  />
                  <span className={webhookActiveStatus ? 'text-emerald-300' : 'text-rose-300'}>
                    {webhookActiveStatus ? 'n8n Webhook Active' : 'Webhook Inactive'}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear Chat History"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close Tutor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
                {messages.map((msg) => {
                  const isUser = msg.sender === 'user';
                  const isSysError = msg.isError;

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm relative group ${
                          isUser
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none'
                            : isSysError
                            ? 'bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 rounded-bl-none'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none'
                        }`}
                      >
                        <MarkdownView content={msg.text} />

                        {/* Copy button on hover */}
                        {!isUser && !isSysError && (
                          <button
                            onClick={() => handleCopyMessage(msg.text, msg.id)}
                            className="absolute -bottom-5 right-2 opacity-0 group-hover:opacity-100 text-[10px] text-slate-400 hover:text-emerald-500 flex items-center gap-1 transition-opacity"
                          >
                            {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                          </button>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none max-w-[80%] text-slate-600 dark:text-slate-300 text-xs">
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                    <span>Relaying question to n8n webhook...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
                {suggestionChips.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(chip)}
                    className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Chat Input Field */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask a Cambridge CIE 1123 question..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={isLoading || !inputText.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-brand-emerald to-brand-cyan hover:from-emerald-600 hover:to-cyan-600 text-white shadow-md disabled:opacity-50 transition-all cursor-pointer"
                  title="Send Question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
