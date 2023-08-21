"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Switch",
    path: "/components/switch",
  },
];

const previewCode = `import { Label } from "@/components/Label";
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

export default Page`;

const code = `
"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { VariantProps, cva } from "class-variance-authority";

const switchVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-2 focus:bg-white  focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-300",
  {
    variants: {
      size: {
        small: "h-[20px] w-[36px]",
        medium: "h-[24px] w-[44px]",
        large: "h-[28px] w-[52px]",
      },
      color: {
        violet: "data-[state=checked]:bg-violet-800 focus:ring-violet-200",
        green: "data-[state=checked]:bg-green-800 focus:ring-green-200",
        red: "data-[state=checked]:bg-red-800 focus:ring-red-200",
        yellow: "data-[state=checked]:bg-yellow-600 focus:ring-yellow-200",
        gray: "data-[state=checked]:bg-gray-600 focus:ring-gray-200",
        black: "data-[state=checked]:bg-black focus:ring-black",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "violet",
    },
  }
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchVariants>
>(({ color, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={\`\${switchVariants({ size, color })}\`}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={\`pointer-events-none \${
        size === "small"
          ? "h-4 w-4"
          : size === "medium"
          ? "h-5 w-5"
          : size === "large"
          ? "h-6 w-6"
          : "h-5 w-5"
      } block rounded-full bg-white shadow-lg ring-0 transition-transform \${
        size === "small"
          ? "data-[state=checked]:translate-x-4"
          : size === "medium"
          ? "data-[state=checked]:translate-x-5"
          : size === "large"
          ? "data-[state=checked]:translate-x-6"
          : "data-[state=checked]:translate-x-5"
      }  data-[state=unchecked]:translate-x-0\`}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Switch"
        subtitle="Switches toggle the state of a single setting on or off. You can give colors from defined colors or use your own colors with sizes too."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/slider#api-reference" />

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
              <div className="flex items-center space-x-2 mt-5">
                <Switch id="airplane-mode" size="medium" color="yellow" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
          <p className="text-gray-800 mb-2">Different Size</p>
          <div className="flex gap-2 justify-center items-center">
            <div className="flex items-center space-x-2 mt-5">
              <Switch id="airplane-mode" size="small" color="violet" />
              <Label htmlFor="airplane-mode">Small</Label>
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <Switch id="airplane-mode" size="medium" color="red" />
              <Label htmlFor="airplane-mode">Medium</Label>
            </div>
            <div className="flex items-center space-x-2 mt-5">
              <Switch id="airplane-mode" size="large" color="green" />
              <Label htmlFor="airplane-mode">Large</Label>
            </div>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-popover" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;

<div className="flex items-center space-x-2 mt-5">
  <Switch id="airplane-mode" size="medium" color="yellow" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>;
