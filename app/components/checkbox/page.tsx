"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import Checkbox from "@/components/Checkbox";
import { Circle } from "lucide-react";
import React from "react";
import { MinusSmallIcon, CheckIcon } from "@heroicons/react/24/solid";

import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import APIRefLayout from "@/components/APIRefLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Checkbox",
    path: "/components/checkbox",
  },
];

const previewCode = `
import React from 'react';
import Checkbox from "@/components/Checkbox";
import { MinusSmallIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <div className="flex items-center">
      <Checkbox
        size="medium"
        container="box"
        id="checkbox"
        icon={<MinusSmallIcon />}
      />
      <label htmlFor="checkbox" className="ml-2">
        Accept terms and conditions.
      </label>
    </div>
  );
};
`;

const code = `
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkbox = cva(
  "flex items-center justify-center border-gray-300 border-2",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
      },
      container: {
        box: "rounded-[4px]",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

interface CheckboxProps extends VariantProps<typeof checkbox> {
  icon?: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ icon, className, container, size, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        \`\${checkbox({
          size,
          container,
        })} \${
          props.disabled
            ? "bg-gray-100"
            : "bg-white shadow-violet-100 hover:bg-violet-100 hover:border-violet-600 focus:ring-2 ring-violet-100 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-100 data-[state=checked]:border-violet-600 data-[state=checked]:text-gray-800"
        } \`,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <div
          className={cn(
            "w-4 h-4 text-violet-600 flex items-center justify-center",
            className
          )}
        >
          {icon ? <>{icon}</> : <CheckIcon />}
        </div>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Checkbox"
        subtitle="A checkbox with a label that can be toggled on and off. You can select container type and size. Also, you can pass an icon to the checkbox."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference" />

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
              <div className="flex items-center">
                <Checkbox
                  size="small"
                  container="box"
                  id="checkbox"
                  icon={<CheckIcon className="w-3 h-3" />}
                />
                <label htmlFor="checkbox" className="ml-2">
                  Box Checkbox with small size with check icon.
                </label>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="w-72 md:w-[900px] sm:w-64 max-w-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={dracula}
                  customStyle={{
                    height: "350px",
                    width: "800px",
                    overflowX: "auto",
                    overflowY: "auto",
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
          <div className="flex flex-col gap-2 justify-center items-start">
            <div className="flex items-center">
              <Checkbox
                size="small"
                container="box"
                id="checkbox"
                icon={<CheckIcon className="w-3 h-3" />}
              />
              <label htmlFor="checkbox" className="ml-2">
                Box Checkbox with small size with check icon.
              </label>
            </div>

            <div className="mt-16">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center">
                  <Checkbox
                    size="medium"
                    container="circle"
                    id="checkbox"
                    icon={<Circle className="fill-violet-800 w-2 h-2" />}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Round Checkbox with medium size with filled circle icon.
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center">
                  <Checkbox
                    size="large"
                    container="box"
                    id="checkbox"
                    icon={<MinusSmallIcon />}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Box Checkbox with large size with minus icon.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-checkbox" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
