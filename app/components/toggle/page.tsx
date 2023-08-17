"use client";
import { Toggle } from "@/components/Toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";
import React from "react";

const Page = () => {
  return (
    <Toggle variant="default" size="default">
      <FontItalicIcon />
    </Toggle>
  );
};

export default Page;