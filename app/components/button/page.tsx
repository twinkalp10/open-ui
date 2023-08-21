"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import TitleLayout from "@/components/TitleLayout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Loader2, ChevronRight } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Button",
    path: "/components/button",
  },
];

const previewCode = `
import React from "react";
import { Button } from "@/components/Button";

const App = () => {
  return (
    <div>
      <Button variant="default" size="small">
        Submit
      </Button>
    </div>
  );
};
`;

const code = `
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center font-inter text-sm font-medium ring-offset-current transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white hover:bg-primary-700 rounded-lg border-primary-600 border-2",
        secondary:
          "bg-gray-300 text-black hover:bg-gray-400 rounded-lg border-gray-300 border-2",
        destructive:
          "bg-error-600 text-white hover:bg-error-700 rounded-lg border-error-600 border-2",
        ghost:
          "hover:bg-gray-100 text-black border-2 border-transparent rounded-lg hover:rounded-lg hover:border-gray-100 hover:border-2",
        link: "text-primary-800 underline-offset-4 hover:underline",
        outline:
          "bg-transparent rounded-lg border-gray-300 border-2 hover:border-gray-400",
      },
      size: {
        small: "px-2 py-1.5",
        medium: "px-3 py-2",
        lg: "px-4 py-2.5",
        xl: "px-5 py-3",
        doublexl: "px-6 py-3.5",
        icon: " h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;

`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Button"
        subtitle="Displays a button or a component that looks like a button. You can give it a variant, size, and other props."
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
                <p className="text-gray-800 mb-2">Default button</p>
                <Button variant="default" size="small">
                  Submit
                </Button>
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
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Default button</p>
            <Button variant="default" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Secondary button</p>
            <Button variant="secondary" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Outline button</p>
            <Button variant="outline" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Link button</p>
            <Button variant="link" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Icon</p>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Destructive button</p>
            <Button variant="destructive" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Ghost button</p>
            <Button variant="ghost" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Loading button</p>
            <Button disabled variant="secondary" size="small">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              please wait...
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-gray-800 mb-2">Different Size</p>
          <div className="flex gap-2 justify-center items-center">
            <Button variant="default" size="small">
              small
            </Button>
            <Button variant="default" size="medium">
              medium
            </Button>
            <Button variant="default" size="lg">
              large
            </Button>
            <Button variant="default" size="xl">
              extra large
            </Button>
            <Button variant="default" size="doublexl">
              double extra large
            </Button>
            <Button
              variant="default"
              size="icon"
              className="border rounded-full"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
