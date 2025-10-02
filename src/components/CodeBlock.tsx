"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg my-6 border">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg hover:bg-purple-600 transition"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>

      {/* Code block */}
      <SyntaxHighlighter
        language="tsx"
        style={vscDarkPlus}
        wrapLines
        wrapLongLines
        customStyle={{
          padding: "20px",
          fontSize: "14px",
          borderRadius: "0.75rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
