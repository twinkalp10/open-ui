"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Toggle } from "@/components/Toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const previewCode = `
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

export default Page;`;

const code = `
"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva(
  "hover:bg-violet-200 bg-blend-color-dodge data-[state=on]:bg-violet-100 data-[state=on]:text-violet-800 shadow-gray-600 flex items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:shadow-gray-200",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-[1px] bg-transparent",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={\`\${toggleVariants({ variant, size })}\`}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
`;

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Toggle",
    path: "/components/toggle",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Toggle"
        subtitle="A two-state button that can be either on or off."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/toggle#api-reference" />

      {/* Tabs */}
      <div className="mt-12 max-w-3xl md:max-w-4xl sm:max-w-2xl">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="code"
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
              <Toggle variant="default" size="default">
                <FontItalicIcon />
              </Toggle>
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
            <p className="text-gray-800 mb-2">
              Toggle with default variant and default size
            </p>
            <Toggle variant="default" size="default">
              <FontItalicIcon />
            </Toggle>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Toggle with outline variant and Large size
            </p>
            <Toggle variant="outline" size="lg">
              <FontItalicIcon />
            </Toggle>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Toggle with customized color and small size
            </p>
            <Toggle
              variant="default"
              size="sm"
              className="data-[state=on]:bg-red-100 data-[state=on]:text-red-800 hover:bg-red-200 "
            >
              <FontItalicIcon />
            </Toggle>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout
        dependency="npm install @radix-ui/react-toggle
"
      />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;

<Toggle variant="default" size="default">
  <FontItalicIcon />
</Toggle>;
