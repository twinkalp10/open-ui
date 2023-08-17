"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "rounded-md data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
      tailwindStyles,
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = TooltipPrimitive.Arrow;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow,
};

const tailwindStyles = `
  .animate-in {
    animation-duration: 400ms;
    animation-fill-mode: both;
  }

  .fade-in-0 {
    animation-name: slideDownAndFade;
  }

  .zoom-in-95 {
    animation-name: slideUpAndFade;
  }

  .data-[state=closed]:animate-out {
    animation-name: slideLeftAndFade;
  }

  .data-[state=closed]:fade-out-0 {
    animation-name: slideRightAndFade;
  }

  .data-[state=closed]:zoom-out-95 {
    animation-name: slideDownAndFade;
  }

  .data-[side=bottom]:slide-in-from-top-2 {
    animation-name: slideUpAndFade;
  }

  .data-[side=left]:slide-in-from-right-2 {
    animation-name: slideLeftAndFade;
  }

  .data-[side=right]:slide-in-from-left-2 {
    animation-name: slideRightAndFade;
  }

  .data-[side=top]:slide-in-from-bottom-2 {
    animation-name: slideUpAndFade;
  }
`;
