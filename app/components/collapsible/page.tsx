"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import { Input } from "@/components/Input";
import { ChevronsUpDown, Plus, X } from "lucide-react";
import React from "react";

const Page = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-[350px]">
      <div className="flex items-center justify-between">
        <h4>Enter more address</h4>
        <CollapsibleTrigger>
          <ChevronsUpDown className="h-4 w-4" />
        </CollapsibleTrigger>
      </div>
      <div className="py-3">
        <Input placeholder="Address 1" width="380px" />
      </div>
      <CollapsibleContent className="py-3">
        <Input placeholder="Address 2" width="380px" />
      </CollapsibleContent>
      <CollapsibleContent className="py-3">
        <Input placeholder="Address 3" width="380px" />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Page;
