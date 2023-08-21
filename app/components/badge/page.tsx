"use client";
import Badge from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumb";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import TitleLayout from "@/components/TitleLayout";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Badge",
    path: "/components/badge",
  },
];

const previewCode = `
import React from 'react';
import Badge from "@/components/Badge";

const App = () => {
  return (
    <Badge
    label="label"
    size="lg"
    container="pill"
    className="text-red-800 bg-red-200"
    />
  );
};
`;

const code = `import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badge = cva(
  \`inline-flex items-center rounded-full border font-semibold\`,
  {
    variants: {
      size: {
        sm: "py-1 px-2 text-xs",
        md: "py-1 px-3 text-sm",
        lg: "py-1 px-4 text-base",
      },
      container: {
        pill: "rounded-2xl",
        box: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      container: "pill",
    },
  }
);

const Badge = ({ label, size, container, className }: BadgeType) => {
  return (
    <div
      className={cn(
        \`\${badge({
          size,
          container,
        })}\`,
        className
      )}
    >
      <div>{label}</div>
    </div>
  );
};

export default Badge;

interface BadgeType
  extends VariantProps<typeof badge>,
    React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Badge"
        subtitle="Display badge with your chosen color and style. You can give it a pill or box container. Also size can be small, medium or large."
      />

      {/* Tabs */}
      <div className="mt-12">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="code"
          className="bg-white py-4 border border-gray-100 shadow sm:rounded-lg max-w-4xl"
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
              <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-gray-800 mb-2">
                  Pill container and small size
                </p>
                <Badge
                  label="label"
                  size="sm"
                  container="pill"
                  className="text-gray-800 bg-green-200"
                />
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
            <p className="text-gray-800 mb-2">Pill container and small size</p>
            <Badge
              label="label"
              size="sm"
              container="pill"
              className="text-gray-800 bg-green-200"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Box container and Medium size</p>
            <Badge
              label="label"
              size="md"
              container="box"
              className="text-red-800 bg-red-200"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Pill container and Large size</p>
            <Badge
              label="label"
              size="lg"
              container="pill"
              className="text-gray-800 bg-blue-200"
            />
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
