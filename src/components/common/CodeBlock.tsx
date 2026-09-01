import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  filename,
  highlightLines = [],
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const { playTone } = useProgress();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      playTone('click');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className={`rounded-lg border border-slate-800 bg-slate-950 overflow-hidden text-sm ${className}`}>
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-500">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="w-3.5 h-3.5 text-slate-500" />
          <span>{filename || `${language.toUpperCase()}`}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="p-4 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed text-slate-200">
        <pre className="table w-full">
          {lines.map((line, index) => {
            const lineNum = index + 1;
            const isHighlighted = highlightLines.includes(lineNum);
            return (
              <div
                key={index}
                className={`table-row transition-colors ${
                  isHighlighted ? 'bg-cyan-500/15 border-l-2 border-cyan-400 font-semibold text-cyan-200' : 'hover:bg-slate-900/50'
                }`}
              >
                <span className="table-cell pr-4 text-right select-none text-slate-600 w-8">
                  {lineNum}
                </span>
                <span className="table-cell whitespace-pre">
                  {line}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};
