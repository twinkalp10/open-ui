"use client";
import { AvatarRoot, AvatarFallback, AvatarImage } from "@/components/Avatar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Page = () => {
  const avatarSrc =
    "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
  return (
    <AvatarRoot>
      <AvatarImage
        src={avatarSrc}
        container="circle"
        size="xl"
        indicator={
          <DotFilledIcon className="text-red-500 w-5 h-5 bottom-[5px] left-[42px] absolute" />
        }
      />
      <AvatarFallback>TP</AvatarFallback>
    </AvatarRoot>
  );
};

export default Page;
