"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import Breadcrumbs from "@/components/Breadcrumb";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import TitleLayout from "@/components/TitleLayout";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import PreviewLayout from "@/components/ExamplesLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Input",
    path: "/components/input",
  },
];

const previewCode = `
"use client";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Page = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        placeholder="Email"
        className="w-80"
        icon={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <QuestionMarkCircleIcon className="h-4 w-4" />
              </TooltipTrigger>
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
        }
      />
    </div>
  );
};

export default Page;
`;

const code = `import React from "react";
import { cn } from "@/lib/utils";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
      <div className="flex gap-2 items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={cn(
              \`flex items-center -ml-8 \${
                error ? "text-red-500" : "text-gray-500"
              }\`
            )}
          >
            {icon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Input"
        subtitle="An input field is a field in which the user can enter text or data. You can add icon for disclaimer and error message to the input field."
      />

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
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Email"
                  className="w-80"
                  icon={
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <QuestionMarkCircleIcon className="h-4 w-4" />
                        </TooltipTrigger>
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
                  }
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

      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Input with tooltip icon</p>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Email"
                className="w-80"
                icon={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <QuestionMarkCircleIcon className="h-4 w-4" />
                      </TooltipTrigger>
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
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Input without tooltip icon and smaller width
            </p>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Email" className="w-52" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">Input with error message</p>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Email"
                className="w-52"
                error="There is an error"
                icon={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <QuestionMarkCircleIcon className="h-4 w-4" />
                      </TooltipTrigger>
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
                }
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
