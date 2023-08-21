"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import React from "react";

const Page = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div>This is content</div>
        <HoverCardArrow className="fill-gray-100" height="10px" />
      </HoverCardContent>
    </HoverCard>
  );
};

export default Page;
