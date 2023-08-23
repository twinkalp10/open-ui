"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import APIRefLayout from "@/components/APIRefLayout";
import Breadcrumbs from "@/components/Breadcrumb";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import TitleLayout from "@/components/TitleLayout";
import React from "react";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "HoverCard",
    path: "/components/hoverCard",
  },
];

const previewCode = `
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
        <div className="border border-gray-300 px-2 py-2">Hover me</div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div>This is Hover content</div>
        <HoverCardArrow className="fill-gray-100" height="10px" />
      </HoverCardContent>
    </HoverCard>
  );
};
`;

const code = `
"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardArrow = HoverCardPrimitive.HoverCardArrow;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="HoverCard"
        subtitle="HoverCard is a component that shows content when you hover over a trigger element."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference" />

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-hover-card" />

      {/* Tabs */}
      <div className="mt-12 max-w-3xl md:max-w-4xl sm:max-w-2xl">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="preview"
          className="bg-white py-4 border border-gray-100 shadow sm:rounded-lg"
        >
          <TabsList className="flex w-28 justify-between items-center gap-5 pl-4">
            <TabsTrigger value="preview" variant="underline">
              UI
            </TabsTrigger>
            <TabsTrigger value="code" variant="underline">
              Code
            </TabsTrigger>
          </TabsList>
          <div className="my-4 flex justify-center items-center">
            <TabsContent value="preview">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="border border-gray-300 px-2 py-2">
                    Hover me
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div>This is Hover content</div>
                  <HoverCardArrow className="fill-gray-100" height="10px" />
                </HoverCardContent>
              </HoverCard>
            </TabsContent>
            <TabsContent value="code">
              <div className="w-72 md:w-[900px] sm:w-64 max-w-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={dracula}
                  customStyle={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    overflowX: "auto",
                  }}
                >
                  {previewCode}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Hover with start alignment</p>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="border border-gray-300 px-2 py-2">Hover me</div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="start">
                <div>This is Hover content</div>
                <HoverCardArrow className="fill-gray-100" height="10px" />
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="mt-20">
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-gray-800 mb-2">
                Hover with end alignment with red color
              </p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="border border-gray-300 px-2 py-2">
                    Hover me
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-96 bg-red-200" align="end">
                  <div>This is Hover content placed at end</div>
                  <HoverCardArrow className="fill-red-100" height="10px" />
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
