"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import APIRefLayout from "@/components/APIRefLayout";
import TitleLayout from "@/components/TitleLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Tabs",
    path: "/components/tabs",
  },
];

const previewCode = `
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import React from "react";

const Page = () => {
  return (
    <Tabs defaultValue="account" className="w-[300px]">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="account" variant="filled">
          Signup
        </TabsTrigger>
        <TabsTrigger value="password" variant="filled">
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Create your account here.</TabsContent>
      <TabsContent value="password">Login password here.</TabsContent>
    </Tabs>
  );
};

export default Page;`;

const code = `"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { VariantProps, cva } from "class-variance-authority";

const tabVariants = cva(
  "inline-flex items-center justify-center text-gray-600 px-1.5 py-1.5 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline:
          "data-[state=active]:border-b-2 data-[state=inactive]:border-b-2 data-[state=inactive]:border-b-transparent data-[state=active]:border-b-violet-800 data-[state=active]:text-violet-800",
        filled:
          "data-[state=active]:bg-gray-100 rounded-md data-[state=active]:shadow-gray-200 data-[state=active]:text-black ring-offset-gray-400 data-[state=active]:shadow-sm",
        sideline:
          "data-[state=active]:border-l-2 data-[state=inactive]:border-l-2 data-[state=inactive]:border-l-transparent data-[state=active]:border-l-violet-800 data-[state=active]:text-violet-800",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className="inline-flex h-10 items-center justify-center rounded-md p-1"
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabVariants>
>(({ variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={\`\${tabVariants({ variant })}\`}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className="mt-2" {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Tabs"
        subtitle="A set of layered sections of content—known as tab panels—that are displayed one at a time. You can select the style of the tabs by passing the variant prop."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/tabs#api-reference" />

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
              <Tabs defaultValue="account" className="w-[300px]">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="account" variant="filled">
                    Signup
                  </TabsTrigger>
                  <TabsTrigger value="password" variant="filled">
                    Login
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  Create your account here.
                </TabsContent>
                <TabsContent value="password">Login password here.</TabsContent>
              </Tabs>
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
            <p className="text-gray-800 mb-2">Filled Tabs</p>
            <Tabs defaultValue="account" className="w-[300px]">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="account" variant="filled">
                  Signup
                </TabsTrigger>
                <TabsTrigger value="password" variant="filled">
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Create your account here.
              </TabsContent>
              <TabsContent value="password">Login password here.</TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">Tabs with left separator</p>
            <Tabs defaultValue="account" className="w-[300px]">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="account" variant="sideline">
                  Signup
                </TabsTrigger>
                <TabsTrigger value="password" variant="sideline">
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Create your account here.
              </TabsContent>
              <TabsContent value="password">Login password here.</TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">Tabs with underline</p>
            <Tabs defaultValue="account" className="w-[300px]">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="account" variant="underline">
                  Signup
                </TabsTrigger>
                <TabsTrigger value="password" variant="underline">
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Create your account here.
              </TabsContent>
              <TabsContent value="password">Login password here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-tabs" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;

<Tabs defaultValue="account" className="w-[300px]">
  <TabsList className="grid grid-cols-2">
    <TabsTrigger value="account" variant="filled">
      Signup
    </TabsTrigger>
    <TabsTrigger value="password" variant="filled">
      Login
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account">Create your account here.</TabsContent>
  <TabsContent value="password">Login password here.</TabsContent>
</Tabs>;
