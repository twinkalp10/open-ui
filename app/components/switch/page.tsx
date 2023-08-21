"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center space-x-2 mt-5">
      <Switch id="airplane-mode" size="medium" color="yellow" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default Page;
