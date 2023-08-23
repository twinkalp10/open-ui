import AuthStyle from "./components/AuthStyle";
import React from "react";
import CardStyle from "./components/CardStyle";
import DashboardStyle from "./components/DashboardStyle";
import Breadcrumbs from "@/components/Breadcrumb";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Examples",
    path: "/examples",
  },
];

const page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />
      <div className="flex flex-col font-inter max-w-3xl md:max-w-5xl py-8 leading-relaxed">
        <div className="flex flex-col gap-32">
          <DashboardStyle />
          <AuthStyle />
          <CardStyle />
        </div>
      </div>
    </div>
  );
};

export default page;
