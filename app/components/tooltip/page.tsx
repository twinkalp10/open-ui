import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/Tooltip";
import React from "react";

const Page = () => {
  return (
    <div className="mt-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side="right" sideOffset={5} className="bg-violet-300">
            <p>Add to library</p>
            <TooltipArrow className="fill-violet-300" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Page;
