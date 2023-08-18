"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

interface progressProps extends VariantProps<typeof circularVariants> {
  indicatorcolor?: string;
}

const circularVariants = cva("", {
  variants: {
    size: {
      xs: "w-16 h-16",
      small: "w-40 h-40",
      medium: "w-52 h-52",
      large: "w-60 h-60",
      xl: "w-64 h-64",
    },
  },
});

const LinearProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ indicatorcolor, className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative w-36 h-3 overflow-hidden rounded-full bg-gray-300`,
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${indicatorcolor} bg-black transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
LinearProgress.displayName = ProgressPrimitive.Root.displayName;

const CircularProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & progressProps
>(({ indicatorcolor, size, className, value, ...props }, ref) => {
  const radius =
    `${circularVariants({ size })}` === "w-16 h-16"
      ? 20
      : `${circularVariants({ size })}` === "w-40 h-40"
      ? 35
      : `${circularVariants({ size })}` === "w-52 h-52"
      ? 50
      : `${circularVariants({ size })}` === "w-60 h-60"
      ? 70
      : `${circularVariants({ size })}` === "w-64 h-64"
      ? 90
      : 500;

  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - (value || 0) / 100);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        `relative ${circularVariants({ size })} overflow-hidden`,
        className
      )}
      {...props}
    >
      <svg className={`${circularVariants({ size })}`}>
        <style>
          {`
            .circle-background {
              fill: none;
              stroke: #e6e6e6;
              stroke-width: 10;
            }

            .circle-progress {
              fill: none;
              stroke: ${indicatorcolor};
              stroke-width: 10;
              transition:strokeDashoffset  0.3s ease;
            }
          `}
        </style>
        <circle className="circle-background" cx="50%" cy="50%" r={radius} />
        <circle
          className="circle-progress"
          cx="50%"
          cy="50%"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
      </svg>
    </ProgressPrimitive.Root>
  );
});

CircularProgress.displayName = ProgressPrimitive.Root.displayName;

export { LinearProgress, CircularProgress };
