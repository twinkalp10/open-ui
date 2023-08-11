import Breadcrumbs from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Button",
    path: "/components/button",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <div className="mt-5">
        <TitleLayout
          title="Button"
          subtitle="Display button with your chosen Initial Icon and different variants."
        />
      </div>
      <div className="mt-5">
        <Button variant="default" size="medium">
          Submit
        </Button>
      </div>

      {/* Code */}
      <div className="mt-5">Code</div>
    </div>
  );
};

export default Page;
