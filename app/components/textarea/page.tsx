"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import React from "react";

const Page = () => {
  return (
    <div>
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
};

export default Page;
