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

const code = `
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
