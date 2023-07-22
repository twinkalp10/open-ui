"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon, SlashIcon } from "@radix-ui/react-icons";

const breadcrumbs = cva("flex items-center text-sm", {
  variants: {
    separator: {
      arrow: "font-medium text-gray-900",
      slash: "font-medium text-gray-900",
    },
    defaultVariants: {
      size: "medium",
      separator: "arrow",
    },
  },
});

export interface BreadcrumbsItems {
  label: string;
  path: string;
}

export interface breadcrumbsprops
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof breadcrumbs> {
  separator: "arrow" | "slash";
  items: BreadcrumbsItems[];
  showInitialIcon: Boolean;
  initialIcon?: React.ReactNode;
}

export const Breadcrumbs: React.FC<breadcrumbsprops> = ({
  className,
  separator,
  items,
  initialIcon,
  showInitialIcon,
  ...props
}) => {
  const separatorIcon =
    separator === "arrow" ? (
      <ChevronRightIcon className="mx-3" />
    ) : (
      <SlashIcon className="mx-3" />
    );
  const visibleItems = items ? items.slice(0, 1) : [];
  const FirstItems = items.length > 5 ? visibleItems : items;
  return (
    <div className={breadcrumbs({ className, separator })} {...props}>
      {showInitialIcon ? (
        initialIcon ? (
          <div className="mx-2">{initialIcon}</div>
        ) : (
          <div>
            <HomeIcon />
          </div>
        )
      ) : (
        ""
      )}
      <div> {showInitialIcon && separatorIcon} </div>
      {FirstItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <div> {separatorIcon} </div>}
          {
            <Link
              href={item.path}
              className={`${index == items.length - 1 && "font-bold"} `}
            >
              {item.label}
            </Link>
          }
        </div>
      ))}
      {items && items.length > 5 && (
        <div className="flex items-center">
          <span className="mr-3"> {separatorIcon}</span>
          <Link href={items[1].path}>
            <span>...</span>
          </Link>

          <span className="ml-3"> {separatorIcon}</span>
        </div>
      )}

      {items &&
        items.length > 5 &&
        items.slice(-2).map((item, index) => {
          const itemIndex = items.length - 2 + index;
          return (
            <div key={index} className="flex items-center">
              {index > 0 && <div> {separatorIcon} </div>}
              {
                <Link
                  href={item.path}
                  className={`${itemIndex == items.length - 1 && "font-bold"}`}
                >
                  {item.label}
                </Link>
              }
            </div>
          );
        })}
      {props.children}
    </div>
  );
};
