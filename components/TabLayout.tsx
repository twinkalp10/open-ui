"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface TabLayoutProps {
  preview: React.ReactElement;
  code: React.ReactElement;
}

const TabLayout = ({ preview, code }: TabLayoutProps) => {
  return (
    <Tabs defaultValue="account" className="w-[300px]">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="account" variant="filled">
          preview
        </TabsTrigger>
        <TabsTrigger value="password" variant="filled">
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">{preview}</TabsContent>
      <TabsContent value="password">
        <SyntaxHighlighter language="jsx" style={dracula}>
          {code}
        </SyntaxHighlighter>
      </TabsContent>
    </Tabs>
  );
};

export default TabLayout;
