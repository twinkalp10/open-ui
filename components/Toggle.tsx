"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "hover:bg-violet-200 bg-blend-color-dodge data-[state=on]:bg-violet-100 data-[state=on]:text-violet-800  flex items-center justify-center rounded bg-white text-base leading-4 ",
  {
    variants: {
      variant: {
        default:
          "bg-transparent shadow-gray-600 shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:shadow-gray-200",
        outline: "border-2 border-gray-300 bg-transparent",
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
>(({ variant, className, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(`${toggleVariants({ variant, size })}`, className)}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
