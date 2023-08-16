"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { VariantProps, cva } from "class-variance-authority";

const tabVariants = cva(
  "inline-flex items-center justify-center text-gray-600 px-1.5 py-1.5 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline:
          "data-[state=active]:border-b-2 data-[state=inactive]:border-b-2 data-[state=inactive]:border-b-transparent data-[state=active]:border-b-violet-800 data-[state=active]:text-violet-800",
        filled:
          "data-[state=active]:bg-gray-100 rounded-md data-[state=active]:shadow-gray-200 data-[state=active]:text-black ring-offset-gray-400 data-[state=active]:shadow-sm",
        sideline:
          "data-[state=active]:border-l-2 data-[state=inactive]:border-l-2 data-[state=inactive]:border-l-transparent data-[state=active]:border-l-violet-800 data-[state=active]:text-violet-800",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className="inline-flex h-10 items-center justify-center rounded-md p-1"
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabVariants>
>(({ variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={`${tabVariants({ variant })}`}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className="mt-2" {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
