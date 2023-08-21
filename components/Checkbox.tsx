import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkbox = cva(
  "flex items-center justify-center border-gray-300 border-2",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        medium: "w-5 h-5",
        large: "w-6 h-6",
      },
      container: {
        box: "rounded-[4px]",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

interface CheckboxProps extends VariantProps<typeof checkbox> {
  icon?: React.ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ icon, className, container, size, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `${checkbox({
          size,
          container,
        })} ${
          props.disabled
            ? "bg-gray-100"
            : "bg-white shadow-violet-100 hover:bg-violet-100 hover:border-violet-600 focus:ring-2 ring-violet-100 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-100 data-[state=checked]:border-violet-600 data-[state=checked]:text-gray-800"
        } `,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <div
          className={cn(
            "w-4 h-4 text-violet-600 flex items-center justify-center",
            className
          )}
        >
          {icon ? <>{icon}</> : <CheckIcon />}
        </div>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
