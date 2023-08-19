import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Page = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        placeholder="Email"
        className="w-80"
        icon={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <QuestionMarkCircleIcon className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
                className="bg-violet-300"
              >
                <p>Add to library</p>
                <TooltipArrow className="fill-violet-300" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
      />
    </div>
  );
};

export default Page;
