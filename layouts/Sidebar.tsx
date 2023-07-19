import { CornerTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen border-r-2 border-dashed border-gray-200">
      <div className="p-4">
        <div className="bg-black rounded-md">
          <CornerTopRightIcon className="text-white w-6 h-6" />
        </div>
      </div>
      Sidebar
    </div>
  );
};

export default Sidebar;
