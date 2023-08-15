import { VariantProps, cva } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

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
      rectangle: "max-w-[1216px] min-h-[108px]",
      square: "max-w-[343px] min-h-[180px]",
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
>(({ icon, children, container, variant, ...props }, ref) => {
  return (
    <div
      role="alert"
      ref={ref}
      className={`relative py-2 px-4 ${alertVariants({ container, variant })}`}
      {...props}
    >
      <div className="flex justify-between items-center">
        {icon && <div className={`h-5 w-5`}>{icon}</div>}
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

const AlertFooter = React.forwardRef<
  HTMLDivElement,
  React.AllHTMLAttributes<HTMLDivElement> & AlertProps
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="flex justify-start items-center gap-3 mt-5"
      {...props}
    >
      {children}
    </div>
  );
});

export { Alert, AlertTitle, AlertDescription, AlertFooter };
