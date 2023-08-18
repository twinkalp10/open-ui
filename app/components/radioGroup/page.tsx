import { Label } from "@/components/Label";
import { RadioGroup, RadioGroupItem } from "@/components/RadioGroup";
import React from "react";

const Page = () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="default"
          id="r1"
          border_color="border-violet-800"
          fill_color="fill-violet-800"
        />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
};

export default Page;
