"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Toggle } from "@/components/Toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";
import React from "react";

const Page = () => {
  return (
    <Toggle variant="default" size="default">
      <FontItalicIcon />
    </Toggle>
  );
};

export default Page;
