"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { Separator } from "./Separator";
interface codeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: codeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="relative max-w-4xl mt-16">
      <p className="text-gray-800">
        Copy and paste the following code into your project.
      </p>
      <Separator className="max-w-[396px] mb-5 mt-1" />
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="absolute text-white top-2 right-4">
          {copied ? "Copied!" : <ClipboardDocumentIcon className="h-5 w-5" />}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
