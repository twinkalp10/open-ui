"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { VariantProps, cva } from "class-variance-authority";

const switchVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-2 focus:bg-white  focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-300",
  {
    variants: {
      size: {
        small: "h-[20px] w-[36px]",
        medium: "h-[24px] w-[44px]",
        large: "h-[28px] w-[52px]",
      },
      color: {
        violet: "data-[state=checked]:bg-violet-800 focus:ring-violet-200",
        green: "data-[state=checked]:bg-green-800 focus:ring-green-200",
        red: "data-[state=checked]:bg-red-800 focus:ring-red-200",
        yellow: "data-[state=checked]:bg-yellow-600 focus:ring-yellow-200",
        gray: "data-[state=checked]:bg-gray-600 focus:ring-gray-200",
        black: "data-[state=checked]:bg-black focus:ring-black",
      },
    },
    defaultVariants: {
      size: "medium",
      color: "violet",
    },
  }
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchVariants>
>(({ color, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={`${switchVariants({ size, color })}`}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={`pointer-events-none ${
        size === "small"
          ? "h-4 w-4"
          : size === "medium"
          ? "h-5 w-5"
          : size === "large"
          ? "h-6 w-6"
          : "h-5 w-5"
      } block rounded-full bg-white shadow-lg ring-0 transition-transform ${
        size === "small"
          ? "data-[state=checked]:translate-x-4"
          : size === "medium"
          ? "data-[state=checked]:translate-x-5"
          : size === "large"
          ? "data-[state=checked]:translate-x-6"
          : "data-[state=checked]:translate-x-5"
      }  data-[state=unchecked]:translate-x-0`}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
