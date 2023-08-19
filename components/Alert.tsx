import { VariantProps, cva } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva("border rounded-xl shadow-sm", {
  variants: {
    variant: {
      default: " border-gray-300 bg-gray-100 text-gray-800",
      primary: "border-violet-300 text-violet-700 bg-violet-50",
      success: "border-green-300 text-green-700 bg-green-50",
      error: "border-red-300 text-red-700 bg-red-50",
      warning: "border-yellow-300 text-yellow-700 bg-yellow-50",
    },
    container: {
      rectangle: "max-w-[900px] min-h-[108px]",
      square: "max-w-[343px] min-h-[120px]",
    },
  },
  defaultVariants: {
    variant: "default",
    container: "square",
  },
});

interface AlertProps extends VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ icon, children, container, variant, className, ...props }, ref) => {
  return (
    <div
      role="alert"
      ref={ref}
      className={cn(
        `relative py-2 px-4 ${alertVariants({ container, variant })}`,
        className
      )}
      {...props}
    >
      <div className="flex items-center">
        {icon ? (
          <div className={`h-5 w-5 mr-auto`}>{icon}</div>
        ) : (
          <div className={`h-5 w-5 mr-auto`}></div>
        )}
        <XMarkIcon className={`h-4 w-4`} />
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
});

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="mb-2 font-medium leading-none tracking-tight"
      {...props}
    ></div>
  );
});

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ ...props }, ref) => {
  return <div ref={ref} className="text-sm" {...props}></div>;
});

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
