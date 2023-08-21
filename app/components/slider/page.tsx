"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { Slider } from "@/components/Slider";
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
    label: "Slider",
    path: "/components/slider",
  },
];

const previewCode = `
"use client";
import { Slider } from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      width="w-96"
      trackcolor="bg-black"
      thumbcolor="bg-gray-400"
      container="square"
    />
  );
};

export default page;`;

const code = `"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const sliderVariants = cva("", {
  variants: {
    container: {
      square: "rounded-none",
      rounded: "rounded-full",
    },
  },
  defaultVariants: {
    container: "rounded",
  },
});

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  trackcolor?: string;
  thumbcolor?: string;
  width?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      container,
      trackcolor = "bg-black",
      thumbcolor = "bg-white",
      width = \`w-80\`,
      className,
      ...props
    },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        \`relative flex \${width} touch-none select-none items-center\`,
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={\`relative h-2 \${width} grow overflow-hidden \${sliderVariants(
          { container }
        )} \${trackcolor}\`}
      >
        <SliderPrimitive.Range className="absolute h-full border-transparent bg-gray-300" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={\`block h-5 w-5 \${thumbcolor} rounded-full border-2 border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\`}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
`;

const page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Slider"
        subtitle="A slider is an input control for selecting a value from a range of values. You can give colors to the track and thumb.Also, you can select container as square or rounded."
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
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                width="w-96"
                trackcolor="bg-black"
                thumbcolor="bg-gray-400"
                container="square"
              />
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
            <p className="text-gray-800 mb-2">Slider with square container</p>
            <Slider
              defaultValue={[53]}
              max={100}
              step={1}
              width="w-96"
              trackcolor="bg-red-400"
              thumbcolor="bg-orange-400"
              container="square"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">Slider with rounded container</p>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              width="w-96"
              trackcolor="bg-black"
              thumbcolor="bg-gray-400"
              container="rounded"
            />
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-slider" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default page;

<Slider
  defaultValue={[33]}
  max={100}
  step={1}
  width="w-96"
  trackcolor="bg-black"
  thumbcolor="bg-gray-400"
  container="square"
/>;
