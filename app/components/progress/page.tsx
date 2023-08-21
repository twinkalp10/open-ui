"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { CircularProgress, LinearProgress } from "@/components/Progress";
import React from "react";

const Page = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-6">
      <LinearProgress value={progress} />
      <div className="flex items-start">
        <CircularProgress value={progress} size="xs" indicatorcolor="black" />
        <CircularProgress value={progress} size="small" />
        <CircularProgress value={progress} size="medium" />
        <CircularProgress value={progress} size="large" />
        <CircularProgress value={progress} size="xl" />
      </div>
    </div>
  );
};

export default Page;
