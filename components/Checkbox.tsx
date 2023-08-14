//
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";

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

interface CheckboxProps
  extends VariantProps<typeof checkbox>,
    VariantProps<typeof CheckboxPrimitive.Root> {
  icon?: React.ReactNode;
}

type Ref = React.ElementRef<typeof CheckboxPrimitive.Root>;

const Checkbox = React.forwardRef<Ref, CheckboxProps>(
  ({ icon, container, size, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        ref={ref}
        className={`${checkbox({
          size,
          container,
        })} ${
          props.disabled
            ? "bg-gray-100"
            : "bg-white shadow-violet-100 hover:bg-violet-100 hover:border-violet-600 focus:ring-4 ring-violet-100"
        } `}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <div className="w-4 h-4 text-violet-600">
            {icon ? <>{icon}</> : <CheckIcon />}
          </div>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);

export default Checkbox;
