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

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Avatar",
    path: "/components/avatar",
  },
];

const code = `
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
