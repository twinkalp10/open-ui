"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Slider } from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      width="w-96"
      trackcolor="bg-black"
      thumbcolor="bg-white"
      container="square"
    />
  );
};

export default page;
