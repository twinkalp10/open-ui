"use client";
import { CornerTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const NavMenu = [
  {
    label: "Documentation",
    path: "/",
  },
  {
    label: "Styles",
    path: "/styles",
  },
  {
    label: "Examples",
    path: "/examples",
  },
];

const sidebarmenu = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Alert", path: "/components/alert" },
  { name: "Alert Dialog", path: "/components/alertDialog" },
  { name: "Avatar", path: "/components/avatar" },
  { name: "Badge", path: "/components/badge" },
  { name: "Breadcrumb", path: "/components/breadcrumb" },
  { name: "Button", path: "/components/button" },
  // { name: "Calender", path: "/components/calender" },
  { name: "Card", path: "/components/card" },
  { name: "Checkbox", path: "/components/checkbox" },
  { name: "Collapsible", path: "/components/collapsible" },
  // { name: "Combobox", path: "/components/combobox" },
  // { name: "Command", path: "/components/command" },
  // { name: "Context Menu", path: "/components/context-menu" },
  // { name: "Data Table", path: "/components/data-table" },
  // { name: "Date Picker", path: "/components/date-picker" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdownMenu" },
  // { name: "Form", path: "/components/form" },
  { name: "Hover Card", path: "/components/hoverCard" },
  { name: "Input", path: "/components/input" },
  { name: "Label", path: "/components/label" },
  // { name: "Menubar", path: "/components/menubar" },
  // { name: "Navigation Menu", path: "/components/navigation-menu" },
  { name: "Popover", path: "/components/popover" },
  { name: "Progress", path: "/components/progress" },
  { name: "Radio Group", path: "/components/radioGroup" },
  // { name: "Scroll Area", path: "/components/scroll-area" },
  { name: "Select", path: "/components/select" },
  { name: "Separator", path: "/components/separator" },
  // { name: "Sheet", path: "/components/sheet" },
  { name: "Skeleton", path: "/components/skeleton" },
  { name: "Slider", path: "/components/slider" },
  { name: "Switch", path: "/components/switch" },
  // { name: "Table", path: "/components/table" },
  { name: "Tabs", path: "/components/tabs" },
  { name: "Textarea", path: "/components/textarea" },
  // { name: "Toast", path: "/components/toast" },
  { name: "Toggle", path: "/components/toggle" },
  { name: "Tooltip", path: "/components/tooltip" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-72 pl-8 max-h-screen border-r-2 border-gray-200 group overflow-y-hidden fixed top-0 left-0">
      <div className="p-4 sticky top-0 z-50 bg-white">
        <div className="flex justify-start items-center gap-4">
          <CornerTopRightIcon className="bg-black rounded-md text-white w-6 h-6" />
          <div className="flex items-center">
            <div className="text-black font-extrabold text-2xl mr-2 font-serif">
              OPEN
            </div>
            <div className="text-gray-600 font-light text-2xl font-serif">
              AI
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto">
        <div className="px-4 py-4 h-[calc(100vh-60px)] ">
          <p className="text-black font-semibold text-base mb-1 mt-3">
            Getting Started
          </p>
          <div className="flex">
            <div className="border mr-3 border-gray-200"></div>

            <div>
              {NavMenu.map((item) => (
                <Link href={item.path} key={uuidv4()}>
                  <div
                    className={`${
                      pathname === item.path
                        ? "text-blue-950 font-semibold"
                        : "text-gray-600"
                    } relative text-sm py-1 cursor-pointer hover:text-gray-950`}
                  >
                    {item.label}
                    <div
                      className={`${
                        pathname === item.path ? "block" : "hidden"
                      } absolute border h-6 border-blue-950 -left-3.5 top-0 rounded transition-shadow duration-150`}
                    ></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-black font-semibold text-base mb-1 mt-6">
            Components
          </p>
          <div className="flex">
            <div className="border mr-3 mb-6 border-gray-200"></div>

            <div className="mb-6">
              {sidebarmenu.map((item) => (
                <Link href={item.path} key={uuidv4()}>
                  <div
                    className={`${
                      pathname === item.path
                        ? "text-blue-950 font-semibold"
                        : "text-gray-600"
                    } relative text-sm py-1 cursor-pointer hover:text-gray-950`}
                  >
                    {item.name}
                    <div
                      className={`${
                        pathname === item.path ? "block" : "hidden"
                      } absolute border h-6 border-blue-950 -left-3.5 top-0 rounded transition-shadow duration-150`}
                    ></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
