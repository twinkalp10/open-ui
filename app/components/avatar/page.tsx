"use client";
import APIRefLayout from "@/components/APIRefLayout";
import { AvatarRoot, AvatarFallback, AvatarImage } from "@/components/Avatar";
import Breadcrumbs from "@/components/Breadcrumb";
import PreviewLayout from "@/components/PreviewLayout";
import TitleLayout from "@/components/TitleLayout";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { CheckBadgeIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import React from "react";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Avatar",
    path: "/components/avatar",
  },
];

const code = `"use client";
import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
    },
    container: {
      circle: "rounded-full",
      square: "rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
    container: "circle",
  },
});
interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  indicator?: React.ReactNode;
}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & AvatarProps
>(({ size, className, container, indicator, src, ...props }, ref) => {
  const imageStyles = avatarVariants({
    size,
    container,
  });

  return (
    <div className="relative">
      <AvatarPrimitive.Image
        ref={ref}
        src={src}
        className={cn(
          \`\${imageStyles} flex items-center justify-center\`,
          className
        )}
        {...props}
      />
      {indicator && (
        <div className={\`flex justify-center items-center z-50\`}>
          {indicator}
        </div>
      )}
    </div>
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className="flex h-9 w-9 items-center justify-center rounded-full"
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };
`;

const previewCode = `
import React from 'react';
import { AvatarRoot, AvatarFallback, AvatarImage } from "@/components/Avatar";

const avatarSrc =
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";

const App = () => {
  return (
    <div>
      <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="xs"
                indicator={
                  <DotFilledIcon className="text-green-500 w-3 h-3 bottom-0 left-4 absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>
    </div>
    );
  };
`;

const avatarSrc =
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Avatar"
        subtitle="An image element with a fallback for representing the user. You can select a size with the size prop. Also, you can set your choice of indicator to show the status of the user."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/avatar#api-reference" />

      {/* Tabs */}
      <div className="mt-12">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="code"
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
              <div>
                <AvatarRoot>
                  <AvatarImage
                    src={avatarSrc}
                    container="circle"
                    size="md"
                    indicator={
                      <CheckBadgeIcon className="text-blue-500 w-3 h-3 bottom-1 left-8 absolute" />
                    }
                  />
                  <AvatarFallback>TP</AvatarFallback>
                </AvatarRoot>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <SyntaxHighlighter
                language="jsx"
                style={dracula}
                customStyle={{
                  height: "350px",
                  width: "800px",
                  overflow: "auto",
                }}
              >
                {previewCode}
              </SyntaxHighlighter>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex gap-4 justify-center items-center">
            <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="xs"
                indicator={
                  <DotFilledIcon className="text-green-500 w-3 h-3 bottom-0 left-4 absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>

            <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="sm"
                indicator={
                  <DotFilledIcon className="text-green-500 w-4 h-4 bottom-0 left-[21px] absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>

            <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="md"
                indicator={
                  <CheckBadgeIcon className="text-blue-500 w-3 h-3 bottom-1 left-8 absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>

            <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="lg"
                indicator={
                  <CheckBadgeIcon className="text-blue-500 w-3.5 h-3.5 bottom-1 left-9 absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>
            <AvatarRoot>
              <AvatarImage
                src={avatarSrc}
                container="circle"
                size="xl"
                indicator={
                  <BellAlertIcon className="text-black w-4 h-4 bottom-[5px] left-[42px] absolute" />
                }
              />
              <AvatarFallback>TP</AvatarFallback>
            </AvatarRoot>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-avatar" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
