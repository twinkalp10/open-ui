"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/ExamplesLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Textarea",
    path: "/components/textarea",
  },
];

const code = `
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div>
        <textarea
          className={cn(
            \`\${
              error && "border-red-300 focus:ring-red-300"
            } min-h-[128px] min-w-[320px] rounded-md border border-gray-400 bg-white px-3 py-2 text-sm focus:ring-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\`,
            className
          )}
          ref={ref}
          {...props}
        />

        <p className="text-sm text-red-500 mt-1" id="error">
          {error}
        </p>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

`;

const previewCode = `
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

export default Page;`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Textarea"
        subtitle="Displays a form textarea or a component that looks like a textarea."
      />

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
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </div>
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
            <p className="text-gray-800 mb-2">TextArea with an error</p>
            <div>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                error="This is an error"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">TextArea with increased width</p>
            <div>
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="w-96"
              />
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

<div>
  <Label htmlFor="message">Your Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>;
