import { Separator } from "@/components/Separator";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">separator</h4>
        <p className="text-sm text-muted-foreground">
          You can adjust the width, height by giving a style.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-6 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
};

export default Page;
