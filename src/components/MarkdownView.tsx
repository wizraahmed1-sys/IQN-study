import React from 'react';

interface MarkdownViewProps {
  content: string;
  className?: string;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split lines and format paragraphs, headings, bullet points, bold text
  const lines = content.split('\n');

  const renderFormattedText = (text: string) => {
    // Process bold text **bold**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Process italic *italic*
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-700 dark:text-slate-300">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className={`space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 ${className}`}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Heading 3 ###
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-3 mb-1">
              {renderFormattedText(trimmed.replace('### ', ''))}
            </h4>
          );
        }

        // Heading 2 ##
        if (trimmed.startsWith('## ')) {
          return (
            <h3 key={idx} className="text-lg font-bold text-brand-navy dark:text-brand-cyan mt-4 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              {renderFormattedText(trimmed.replace('## ', ''))}
            </h3>
          );
        }

        // Heading 1 #
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={idx} className="text-xl font-black text-brand-navy dark:text-white mt-4 mb-2">
              {renderFormattedText(trimmed.replace('# ', ''))}
            </h2>
          );
        }

        // Bullet point - or *
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="text-emerald-500 font-bold text-base leading-none">•</span>
              <p className="flex-1">{renderFormattedText(trimmed.slice(2))}</p>
            </div>
          );
        }

        // Numbered list 1. 2.
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 min-w-[20px]">{numMatch[1]}.</span>
              <p className="flex-1">{renderFormattedText(numMatch[2])}</p>
            </div>
          );
        }

        // Blockquote >
        if (trimmed.startsWith('>')) {
          return (
            <blockquote key={idx} className="border-l-4 border-emerald-500 pl-3 py-1 italic bg-emerald-500/5 dark:bg-emerald-500/10 rounded-r text-slate-800 dark:text-slate-200">
              {renderFormattedText(trimmed.replace(/^>\s*/, ''))}
            </blockquote>
          );
        }

        // Standard paragraph
        return <p key={idx}>{renderFormattedText(line)}</p>;
      })}
    </div>
  );
};
