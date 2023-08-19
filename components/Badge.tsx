import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badge = cva(
  `inline-flex items-center rounded-full border font-semibold`,
  {
    variants: {
      size: {
        sm: "py-0.5 px-2 text-xs",
        md: "py-0.5 px-2.5 text-sm",
        lg: "py-1 px-3 text-base",
      },
      type: {
        pill: "rounded-2xl",
        box: "rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
      type: "pill",
    },
  }
);

const Badge = ({
  label,
  color = "text-gray-800",
  background_color,
  size,
  type,
  className,
}: BadgeType) => {
  return (
    <div
      className={cn(
        `${badge({
          size,
          type,
        })} ${color} ${background_color}`,
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
  color?: string;
  background_color: string;
}
