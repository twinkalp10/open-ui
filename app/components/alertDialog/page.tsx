"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/AlertDialog";
import { TrashIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import { Button } from "@/components/Button";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Alert Dialog",
    path: "/components/alertDialog",
  },
];

const code = `"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AlertDialogProps extends VariantProps<typeof AlertVariants> {
  icon?: React.ReactNode;
}

const AlertVariants = cva(
  \`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none\`,
  {
    variants: {
      size: {
        rectangle: "max-w-[500px]",
        square: "max-w-[350px] ",
      },
    },
    defaultVariants: {
      size: "rectangle",
    },
  }
);

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = ({
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal {...props} />
);

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogPrimitive.Overlay
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      {...props}
      ref={ref}
    />
  </AlertDialogPortal>
));

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> &
    AlertDialogProps
>(({ size, className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        \`fixed left-[50%] top-[50%] z-50 grid w-full \${AlertVariants({
          size,
        })}  translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full\`,
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> &
    AlertDialogProps
>(({ children, icon, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={\`flex gap-3 text-lg font-semibold\`}
      {...props}
    >
      <div className="flex justify-center items-center gap-3">
        {icon && (
          <div className={\`w-5 h-5 flex justify-center items-center\`}>
            {icon}
          </div>
        )}
        <div>{children}</div>
      </div>
    </AlertDialogPrimitive.Title>
  );
});

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className="text-sm text-gray-800"
    {...props}
  />
));

const AlertDialogHeader = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="flex flex-col space-y-2 text-center sm:text-left"
    {...props}
  />
);

const AlertDialogFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
    {...props}
  />
);

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ ...props }, ref) => <AlertDialogPrimitive.Action ref={ref} {...props} />);

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ ...props }, ref) => <AlertDialogPrimitive.Cancel ref={ref} {...props} />);

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
AlertDialogHeader.displayName = "AlertDialogHeader";
AlertDialogFooter.displayName = "AlertDialogFooter";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
};
`;

const previewCode = `
import React from 'react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogHeader, AlertDialogFooter } from "@/components/AlertDialog";
import { TrashIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-gray-800 mb-2">Alert Dialog with square container</p>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent size="square">
            <AlertDialogHeader>
              <AlertDialogTitle icon={<TrashIcon className="text-red-400" />}>
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                <Button variant="destructive">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Button variant="secondary">Continue</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
)
};
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Alert Dialog"
        subtitle="A modal dialog that interrupts the user with important content and expects a response. You can choose container to show the alert dialog in rectangle or square."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference" />

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
              <div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="outline">Open Square Alert Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent size="square">
                    <AlertDialogHeader>
                      <AlertDialogTitle
                        icon={<TrashIcon className="text-red-400" />}
                      >
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>
                        <Button variant="destructive">Cancel</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction>
                        <Button variant="secondary">Continue</Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
            <p className="text-gray-800 mb-2">
              Alert Dialog with square container
            </p>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="outline">Open Square Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="square">
                <AlertDialogHeader>
                  <AlertDialogTitle
                    icon={<TrashIcon className="text-red-400" />}
                  >
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Button variant="destructive">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="secondary">Continue</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Alert Dialog with rectangle container
            </p>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="outline">Open Rectangle Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="rectangle">
                <AlertDialogHeader>
                  <AlertDialogTitle
                    icon={<TrashIcon className="text-red-400" />}
                  >
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Button variant="destructive">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="secondary">Continue</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-alert-dialog" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
