"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import APIRefLayout from "@/components/APIRefLayout";
import Breadcrumbs from "@/components/Breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import { Input } from "@/components/Input";
import TitleLayout from "@/components/TitleLayout";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import React from "react";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const previewCode = `"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import { Input } from "@/components/Input";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import React from "react";

const Page = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-[350px]">
      <div className="flex items-center justify-between">
        <h4>Enter more address</h4>
        <CollapsibleTrigger>
          <ChevronsUpDown className="h-4 w-4" />
        </CollapsibleTrigger>
      </div>
      <div className="py-3">
        <Input placeholder="Address 1" width="380px" />
      </div>
      <CollapsibleContent className="py-3">
        <Input placeholder="Address 2" width="380px" />
      </CollapsibleContent>
      <CollapsibleContent className="py-3">
        <Input placeholder="Address 3" width="380px" />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Page;`;

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Collapsible",
    path: "/components/collapsible",
  },
];

const code = `"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
`;

const Page = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Collapsible"
        subtitle="An interactive component which expands/collapses a panel."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference" />

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-collapsible" />

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
              <Collapsible
                open={open}
                onOpenChange={setOpen}
                className="w-[350px]"
              >
                <div className="flex items-center justify-between">
                  <h4>Enter more address</h4>
                  <CollapsibleTrigger>
                    <ChevronsUpDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                </div>
                <div className="py-3">
                  <Input placeholder="Address 1" width="380px" />
                </div>
                <CollapsibleContent className="py-3">
                  <Input placeholder="Address 2" width="380px" />
                </CollapsibleContent>
                <CollapsibleContent className="py-3">
                  <Input placeholder="Address 3" width="380px" />
                </CollapsibleContent>
              </Collapsible>
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

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
