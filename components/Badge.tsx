import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badge = cva(
  `inline-flex items-center rounded-full border font-semibold`,
  {
    variants: {
      size: {
        sm: "py-1 px-2 text-xs",
        md: "py-1 px-3 text-sm",
        lg: "py-1 px-4 text-base",
      },
      container: {
        pill: "rounded-2xl",
        box: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      container: "pill",
    },
  }
);

const Badge = ({ label, size, container, className }: BadgeType) => {
  return (
    <div
      className={cn(
        `${badge({
          size,
          container,
        })}`,
        className
      )}
    >
      <div>{label}</div>
    </div>
  );
};

export default Badge;

interface BadgeType
  extends VariantProps<typeof badge>,
    React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
