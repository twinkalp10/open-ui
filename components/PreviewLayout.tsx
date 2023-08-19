import React from "react";
import { Separator } from "./Separator";

const PreviewLayout = ({
  children,
}: React.AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="mt-12">
      <p className="text-gray-800">Preview</p>
      <Separator className="max-w-[60px] mb-5 mt-1" />
      <div className="bg-white flex justify-center items-center py-10 border border-gray-100 shadow overflow-hidden sm:rounded-lg max-w-4xl">
        <div className="px-4 py-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

export default PreviewLayout;
