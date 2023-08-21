"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/Tooltip";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const previewCode = `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/Tooltip";
import React from "react";

const Page = () => {
  return (
    <div className="mt-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side="right" sideOffset={5} className="bg-violet-300">
            <p>Add to library</p>
            <TooltipArrow className="fill-violet-300" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Page;`;

const code = `
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "rounded-md data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
      tailwindStyles,
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = TooltipPrimitive.Arrow;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
};

const tailwindStyles = \`
  .animate-in {
    animation-duration: 400ms;
    animation-fill-mode: both;
  }

  .fade-in-0 {
    animation-name: slideDownAndFade;
  }

  .zoom-in-95 {
    animation-name: slideUpAndFade;
  }

  .data-[state=closed]:animate-out {
    animation-name: slideLeftAndFade;
  }

  .data-[state=closed]:fade-out-0 {
    animation-name: slideRightAndFade;
  }

  .data-[state=closed]:zoom-out-95 {
    animation-name: slideDownAndFade;
  }

  .data-[side=bottom]:slide-in-from-top-2 {
    animation-name: slideUpAndFade;
  }

  .data-[side=left]:slide-in-from-right-2 {
    animation-name: slideLeftAndFade;
  }

  .data-[side=right]:slide-in-from-left-2 {
    animation-name: slideRightAndFade;
  }

  .data-[side=top]:slide-in-from-bottom-2 {
    animation-name: slideUpAndFade;
  }
\`;
`;

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Tooltip",
    path: "/components/tooltip",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Tooltip"
        subtitle="A tooltip is a small pop-up box that appears when a user hovers over an element. You can customize the tooltip's position, delay, and animation."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference" />

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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>Hover</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    sideOffset={5}
                    className="bg-violet-300"
                  >
                    <p>Add to library</p>
                    <TooltipArrow className="fill-violet-300" />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
            <p className="text-gray-800 mb-2">tooltip with top position</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Hover me</TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={5}
                  className="bg-violet-300"
                >
                  <p>Add to library</p>
                  <TooltipArrow className="fill-violet-300" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800">tooltip with right position</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>Hover me</TooltipTrigger>
                <TooltipContent
                  side="right"
                  sideOffset={5}
                  className="bg-green-300"
                >
                  <p>Hello there!</p>
                  <TooltipArrow className="fill-green-300" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-tooltip" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent side="right" sideOffset={5} className="bg-violet-300">
      <p>Add to library</p>
      <TooltipArrow className="fill-violet-300" />
    </TooltipContent>
  </Tooltip>
</TooltipProvider>;
