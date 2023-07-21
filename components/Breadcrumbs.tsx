import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon, SlashIcon } from "@radix-ui/react-icons";

const breadcrumbs = cva("flex gap-3 items-center text-sm", {
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
    separator === "arrow" ? <ChevronRightIcon /> : <SlashIcon />;
  return (
    <div className={breadcrumbs({ className, separator })} {...props}>
      {showInitialIcon ? initialIcon ? initialIcon : <HomeIcon /> : ""}
      <div> {showInitialIcon && separatorIcon} </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <div className="mr-3"> {separatorIcon} </div>}
          {
            <Link
              href={item.path}
              className={`${index == items.length - 1 && "font-bold"}`}
            >
              {item.label}
            </Link>
          }
        </div>
      ))}
      {props.children}
    </div>
  );
};
