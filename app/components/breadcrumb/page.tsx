import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Breadcrumb",
    path: "/components/breadcrumb",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <div className="mt-5">
        <TitleLayout
          title="BreadCrumbs"
          subtitle="Display breadcrumbs with slash or arrow separator with your chosen
        Initial Icon."
        />
      </div>

      {/* Code */}
      <div className="mt-5">
        <div>Code</div>
      </div>
    </div>
  );
};

export default Page;
