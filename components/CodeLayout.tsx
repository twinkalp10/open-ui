import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeLayout = () => {
  const code = `x+1`;

  return (
    <SyntaxHighlighter
      language="tsx"
      style={a11yDark}
      customStyle={{ width: "800px" }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeLayout;
