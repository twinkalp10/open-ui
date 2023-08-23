"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import React from "react";
import { Cog6ToothIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import CodeBlock from "@/components/CodeLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Alert",
    path: "/components/alert",
  },
];

const code = `
import { VariantProps, cva } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva("border rounded-xl shadow-sm", {
  variants: {
    variant: {
      default: " border-gray-300 bg-gray-100 text-gray-800",
      primary: "border-violet-300 text-violet-700 bg-violet-50",
      success: "border-green-300 text-green-700 bg-green-50",
      error: "border-red-300 text-red-700 bg-red-50",
      warning: "border-yellow-300 text-yellow-700 bg-yellow-50",
    },
    container: {
      rectangle: "max-w-[900px] min-h-[108px]",
      square: "max-w-[343px] min-h-[120px]",
    },
  },
  defaultVariants: {
    variant: "default",
    container: "square",
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ icon, children, container, variant, className, ...props }, ref) => {
  return (
    <div
      role="alert"
      ref={ref}
      className={cn(
        \`relative py-2 px-4 \${alertVariants({ container, variant })}\`,
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        {icon ? (
          <div className={\`h-5 w-5 mr-auto\`}>{icon}</div>
        ) : (
          <div className={\`h-5 w-5 mr-auto\`}></div>
        )}
        <XMarkIcon className={\`h-4 w-4\`} />
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
});

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="mb-2 font-medium leading-none tracking-tight"
      {...props}
    ></div>
  );
});

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ ...props }, ref) => {
  return <div ref={ref} className="text-sm" {...props}></div>;
});

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
`;

const previewCode = `
import React from 'react';
import { Alert, AlertDescription, AlertFooter, AlertTitle } from "@/components/Alert";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";

const App = () => {
  return (
    <div>
      <Alert variant="primary" container="square" icon={<Cog6ToothIcon />}>
        <AlertTitle>This is a primary alert — check it out!</AlertTitle>
        <AlertDescription>
          This is a primary description — you can change it using variant props
        </AlertDescription>
      </Alert>
    </div>
  );
};

  `;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Alert"
        subtitle="Displays a callout for user attention. You can set the variant to change the color of the alert, icon, and size of it using container props."
      />

      {/* Tabs */}
      <div className="mt-12">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="preview"
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
              <div>
                <Alert
                  variant="primary"
                  container="square"
                  icon={<Cog6ToothIcon />}
                >
                  <AlertTitle>
                    This is a primary alert — check it out!
                  </AlertTitle>
                  <AlertDescription>
                    This is a primary description — you can change it using
                    variant props
                  </AlertDescription>
                </Alert>
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
              Alert with primary variant and square container
            </p>
            <Alert
              variant="primary"
              container="square"
              icon={<ArrowRightIcon />}
            >
              <AlertTitle>This is a primary alert — check it out!</AlertTitle>
              <AlertDescription>
                This is a primary description — you can change it using variant
                props
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Alert with error variant and rectangle container
            </p>
            <Alert
              variant="error"
              container="rectangle"
              icon={<Cog6ToothIcon />}
            >
              <AlertTitle>This is a primary alert — check it out!</AlertTitle>
              <AlertDescription>
                This is a primary description — you can change it using variant
                props
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
