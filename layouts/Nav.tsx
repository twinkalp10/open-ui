import React from "react";
import { CornerTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 bg-white p-4 border-b-2  border-gray-200">
      <div className="flex justify-between max-w-7xl w-full m-auto items-center">
        <div></div>
        <div>
          <GitHubLogoIcon className=" w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
