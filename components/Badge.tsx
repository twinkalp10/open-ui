import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

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

const Badge = ({ label, color, background_color, size, type }: BadgeType) => {
  return (
    <div
      className={`${badge({
        size,
        type,
      })} ${color} ${background_color}`}
    >
      <div>{label}</div>
    </div>
  );
};

export default Badge;

interface BadgeType extends VariantProps<typeof badge> {
  label: string;
  color: string;
  background_color: string;
}
