"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
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
    <div className="max-w-4xl mt-16">
      <p className="text-gray-800">
        Copy and paste the following code into your project.
      </p>
      <Separator className="max-w-[396px] mb-5 mt-1" />

      <SyntaxHighlighter
        language="jsx"
        style={dracula}
        customStyle={{ maxHeight: "700px", overflowY: "auto" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
