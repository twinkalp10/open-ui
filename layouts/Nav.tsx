import React from "react";
import { CornerTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white p-4 shadow-md shadow-slate-900/5 transition duration-500 border-b border-gray-200">
      <div className="flex justify-between max-w-7xl w-full m-auto items-center">
        <div className="bg-black rounded-md">
          <CornerTopRightIcon className="text-white w-6 h-6" />
        </div>
        <div>
          <GitHubLogoIcon className=" w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
