"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "./Separator";
interface Props {
  dependency: string;
}

const DependencyLayout = ({ dependency }: Props) => {
  return (
    <div className="max-w-4xl mt-16">
      <p className="text-gray-800">Install the following dependencies:</p>
      <Separator className="max-w-[270px] mb-5 mt-1" />
      <SyntaxHighlighter language="jsx" style={dracula}>
        {dependency}
      </SyntaxHighlighter>
    </div>
  );
};

export default DependencyLayout;
