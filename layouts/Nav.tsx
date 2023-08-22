"use client";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";

const NavMenu = [
  {
    label: "Documentation",
    path: "/",
  },
  {
    label: "Components",
    path: "/components/accordion",
  },
  {
    label: "Examples",
    path: "/examples",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white p-4 border-b-2 border-gray-200 shadow-sm">
      <div className="flex justify-between max-w-7xl w-full m-auto items-center">
        <div className="flex items-center gap-6">
          {NavMenu.map((item) => (
            <Link
              href={item.path}
              key={uuidv4()}
              className={`${
                pathname === item.path
                  ? "text-blue-950 font-semibold"
                  : "text-gray-600"
              } relative text-base cursor-pointer hover:text-gray-950`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <GitHubLogoIcon className=" w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
