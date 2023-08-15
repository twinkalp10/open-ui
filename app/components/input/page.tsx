import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Page = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input placeholder="Email" icon={<QuestionMarkCircleIcon />} />
    </div>
  );
};

export default Page;
