"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import { AvatarFallback, AvatarImage, AvatarRoot } from "@/components/Avatar";
import Breadcrumbs from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import {
  Card,
  CardContent,
  CardIcon,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import CodeBlock from "@/components/CodeLayout";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import PreviewLayout from "@/components/PreviewLayout";
import { Switch } from "@/components/Switch";
import TitleLayout from "@/components/TitleLayout";
import {
  EllipsisVerticalIcon,
  BellAlertIcon,
  CheckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Card",
    path: "/components/card",
  },
];

const previewCode = `
import React from 'react';
import { Card, CardContent, CardIcon, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardIcon>
          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </CardIcon>
        <CardTitle>Create user</CardTitle>
        <CardDescription>Create new account with one click</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="w-52" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="w-52" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};
`;

const code = `import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-transparent text-gray-800 shadow-sm",
      className
    )}
    {...props}
  >
    {props.children}
  </div>
));
Card.displayName = "Card";

const CardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute top-2 right-2", className)}
    {...props}
  />
));
CardIcon.displayName = "CardIcon";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-800", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardIcon,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
`;

const page = () => {
  const avatarSrc =
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Card"
        subtitle="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
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
              <Card className="w-[350px]">
                <CardHeader>
                  <CardIcon>
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                  </CardIcon>
                  <CardTitle>Create user</CardTitle>
                  <CardDescription>
                    Create new account with one click
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="w-52" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" className="w-52" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
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
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Card with icon at top and inputs
            </p>
            <Card className="w-[350px]">
              <CardHeader>
                <CardIcon>
                  <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                </CardIcon>
                <CardTitle>Create user</CardTitle>
                <CardDescription>
                  Create new account with one click
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="w-52" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" className="w-52" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Card with switch and without top icon
            </p>
            <Card className="w-[350px] bg-slate-100">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 new notifications!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 rounded-md border mb-4 p-4">
                  <BellAlertIcon className="h-5 w-5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Card with User profile</p>
            <Card className="w-[350px]">
              <CardHeader>
                <CardIcon>
                  <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                </CardIcon>
                <CardTitle className="text-xl flex items-center gap-2">
                  <AvatarRoot>
                    <AvatarImage
                      src={avatarSrc}
                      container="circle"
                      size="sm"
                      indicator={
                        <CheckBadgeIcon className="text-green-500 w-3 h-3 bottom-0 left-[21px] absolute" />
                      }
                    />
                    <AvatarFallback>TP</AvatarFallback>
                  </AvatarRoot>
                  John Smith
                </CardTitle>
                <CardDescription className="text-sm">
                  Software Engineer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600 flex flex-col text-sm">
                  <p>NewYork, USA</p>
                  <p>+1 23456789</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default page;
