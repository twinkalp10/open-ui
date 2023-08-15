"use client";
import { AvatarFallback, AvatarImage } from "@/components/Avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/react-avatar";
import React from "react";

const Page = () => {
  const avatarSrc =
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
  return (
    <Avatar>
      <AvatarImage
        src={avatarSrc}
        container="circle"
        size="xl"
        indicator={
          <DotFilledIcon className="text-red-500 w-4 h-4 bottom-[1px] left-10 absolute" />
        }
      />
      <AvatarFallback>TP</AvatarFallback>
    </Avatar>
  );
};

export default Page;
