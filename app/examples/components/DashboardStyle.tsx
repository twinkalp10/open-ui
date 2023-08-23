import React from "react";
import Dashboard from "./Dashboard";

const DashboardStyle = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-semibold">Dashboard</p>
        <p className="text-gray-600">
          The provided dashboard serves as an illustration of how we can
          leverage additional components within this library. This dashboard was
          crafted using Tailwind CSS and React, and it can be expanded with
          further components to suit your specific requirements. Feel free to
          incorporate additional elements as necessary.
        </p>
        <ul className="flex gap-24 list-disc ml-8 text-gray-600">
          <div>
            <li>Card</li>
            <li>Separator</li>
            <li>Tab</li>
            <li>Input</li>
            <li>Select</li>
          </div>
          <div>
            <li>Dialog</li>
            <li>Input</li>
            <li>Label</li>
            <li>Button</li>
            <li>Dropdown Menu</li>
          </div>
          <div>
            <li>Hover card</li>
            <li>Avatar</li>
            <li>Progress</li>
            <li>Slider</li>
            <li>Switch</li>
          </div>
        </ul>
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardStyle;
