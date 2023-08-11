import { ChevronRightIcon, SlashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Breadcrumbs = ({
  separator = "arrow",
  items,
  initialIcon,
}: BreadcrumbsType) => {
  const newItems = getAllItems(items);
  const totalItems = newItems.length;
  if (!totalItems) return null;

  return (
    <div className="flex items-center text-sm font-medium text-gray-900 space-x-3">
      {initialIcon && <div>{initialIcon}</div>}
      {newItems.map((item, index) => {
        return (
          <Crumbs
            showInitialSeparator={!!initialIcon && index === 0}
            item={item}
            separator={separator}
            heightLight={index === totalItems - 1}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

export interface BreadcrumbsItemType {
  label: string;
  path: string;
}

export interface BreadcrumbsType {
  separator?: "arrow" | "slash";
  items: BreadcrumbsItemType[];
  initialIcon?: React.ReactNode;
}

interface CrumbType {
  heightLight?: boolean;
  separator: "arrow" | "slash";
  item: BreadcrumbsItemType;
  showInitialSeparator: boolean;
}

const getAllItems = (items: BreadcrumbsItemType[]) => {
  const totalItems = items.length;
  if (totalItems < 4) return items;
  const lastThreeItems = items.slice(-3);
  const firstItem = items[0];
  return [firstItem, ...lastThreeItems].map((item, index) => {
    if (index === 1) return { ...item, label: "..." };
    return item;
  });
};

const Crumbs = ({
  heightLight,
  item,
  separator,
  showInitialSeparator,
}: CrumbType) => {
  const separatorIcon =
    separator === "arrow" ? <ChevronRightIcon /> : <SlashIcon />;

  return (
    <>
      {showInitialSeparator && separatorIcon}
      <Link className={`${heightLight && "font-bold"}`} href={item.path}>
        {item.label}
      </Link>
      {!heightLight && separatorIcon}
    </>
  );
};
