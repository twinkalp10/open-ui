import { Button } from "@/components/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  PopoverClose,
} from "@/components/Popover";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const Page = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div>This is content</div>
      </PopoverContent>
    </Popover>
  );
};

export default Page;
