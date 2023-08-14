"use client";
import Checkbox from "@/components/Checkbox";
import React from "react";
import { MinusSmallIcon } from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <div className="flex items-center">
      <Checkbox
        size="medium"
        container="box"
        id="checkbox"
        icon={<MinusSmallIcon />}
      />
      <label htmlFor="checkbox" className="ml-2">
        Accept terms and conditions.
      </label>
    </div>
  );
};

export default Page;
