import Badge from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Badge",
    path: "/components/badge",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <div className="mt-5">
        <TitleLayout
          title="Badge"
          subtitle="Display badge with your chosen color and style."
        />
      </div>
      <div className="mt-5">
        <Badge
          color="text-red"
          background_color="bg-red-100"
          label="label"
          size="lg"
          type="pill"
        />
      </div>

      {/* Code */}
      <div className="mt-5">Code</div>
    </div>
  );
};

export default Page;
