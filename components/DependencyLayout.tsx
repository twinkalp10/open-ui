import React from "react";
import CodeBlock from "./CodeLayout";

interface Props {
  dependency: string;
}

const DependencyLayout = ({ dependency }: Props) => {
  return (
    <div>
      <p>Install the following dependencies: </p>
      <CodeBlock code={dependency} />
    </div>
  );
};

export default DependencyLayout;
