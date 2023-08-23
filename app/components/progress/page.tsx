"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { CircularProgress, LinearProgress } from "@/components/Progress";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const previewCode = `
"use client";
import { CircularProgress, LinearProgress } from "@/components/Progress";
import React from "react";

const Page = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-6">
      <LinearProgress value={progress} />
      <div className="flex items-start">
        <CircularProgress value={progress} size="xs" indicatorcolor="black" />
        <CircularProgress value={progress} size="small" />
        <CircularProgress value={progress} size="medium" />
        <CircularProgress value={progress} size="large" />
        <CircularProgress value={progress} size="xl" />
      </div>
    </div>
  );
};

export default Page;
`;

const code = `
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

interface progressProps extends VariantProps<typeof circularVariants> {
  indicatorcolor?: string;
}

const circularVariants = cva("", {
  variants: {
    size: {
      xs: "w-16 h-16",
      small: "w-40 h-40",
      medium: "w-52 h-52",
      large: "w-60 h-60",
      xl: "w-64 h-64",
    },
  },
});

const LinearProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ indicatorcolor, className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      \`relative w-36 h-3 overflow-hidden rounded-full bg-gray-300\`,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={\`h-full w-full flex-1 \${indicatorcolor} bg-black transition-all\`}
      style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
    />
  </ProgressPrimitive.Root>
));
LinearProgress.displayName = ProgressPrimitive.Root.displayName;

const CircularProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ indicatorcolor, size, className, value, ...props }, ref) => {
  const radius =
    \`\${circularVariants({ size })}\` === "w-16 h-16"
      ? 20
      : \`\${circularVariants({ size })}\` === "w-40 h-40"
      ? 35
      : \`\${circularVariants({ size })}\` === "w-52 h-52"
      ? 50
      : \`\${circularVariants({ size })}\` === "w-60 h-60"
      ? 70
      : \`\${circularVariants({ size })}\` === "w-64 h-64"
      ? 90
      : 500;

  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - (value || 0) / 100);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        \`relative \${circularVariants({ size })} overflow-hidden\`,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator>
        <svg className={\`\${circularVariants({ size })}\`}>
          <style>
            {\`
            .circle-background {
              fill: none;
              stroke: #e6e6e6;
              stroke-width: 10;
            }

            .circle-progress {
              fill: none;
              stroke: \${indicatorcolor};
              stroke-width: 10;
              transition:strokeDashoffset  0.3s ease;
            }
          \`}
          </style>
          <circle className="circle-background" cx="50%" cy="50%" r={radius} />
          <circle
            className="circle-progress"
            cx="50%"
            cy="50%"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
          />
        </svg>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
});

CircularProgress.displayName = ProgressPrimitive.Root.displayName;

export { LinearProgress, CircularProgress };
`;

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Progress",
    path: "/components/progress",
  },
];

const Page = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Progress"
        subtitle="Displays an indicator showing the completion progress of a task, typically displayed as a linear bar or circle."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/progress#api-reference" />

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-progress" />

      {/* Tabs */}
      <div className="mt-12">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="preview"
          className="bg-white py-4 border border-gray-100 shadow sm:rounded-lg max-w-4xl "
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
              <div className="flex items-center gap-10 mt-6">
                <LinearProgress value={progress} />
                <CircularProgress
                  value={progress}
                  size="medium"
                  indicatorcolor="black"
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
            <p className="text-gray-800 mb-2">
              Linear progress with different sizes and colors
            </p>
            <div className="flex flex-col gap-10 mt-6">
              <LinearProgress value={progress} />
              <LinearProgress
                value={progress}
                indicatorcolor="bg-violet-600"
                className="w-80"
              />
              <LinearProgress
                value={progress}
                indicatorcolor="bg-yellow-600"
                className="w-96 bg-orange-200"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Circular progress with different sizes
            </p>
            <div className="grid grid-cols-3 items-center">
              <CircularProgress value={progress} size="xs" />
              <CircularProgress
                value={progress}
                size="small"
                indicatorcolor="#F87171"
              />
              <CircularProgress value={progress} size="medium" />
              <CircularProgress value={progress} size="large" />
              <CircularProgress value={progress} size="xl" />
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
