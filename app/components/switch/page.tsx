import { Label } from "@/components/Label";
import { Switch } from "@/components/Switch";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center space-x-2 mt-5">
      <Switch id="airplane-mode" size="medium" color="yellow" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
};

export default Page;
