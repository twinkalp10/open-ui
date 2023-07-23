import Breadcrumbs from "@/components/Breadcrumb";
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
      <Breadcrumbs separator="arrow" items={Items} showInitialIcon={false} />
      <div className="flex flex-col space-y-12 my-3">
        {/* Heading */}
        <div className="flex flex-col space-y-2">
          <p className="text-4xl font-bold">Breadcrumbs</p>
          <p className="text-gray-600">
            Display breadcrumbs with slash or arrow separator with your chosen
            Initial Icon.
          </p>
        </div>

        {/* Code */}
        <div>Code</div>
      </div>
    </div>
  );
};

export default Page;
