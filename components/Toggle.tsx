"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva(
  "hover:bg-violet-200 bg-blend-color-dodge data-[state=on]:bg-violet-100 data-[state=on]:text-violet-800 shadow-gray-600 flex items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:shadow-gray-200",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-[1px] bg-transparent",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={`${toggleVariants({ variant, size })}`}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
