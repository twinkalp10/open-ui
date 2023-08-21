import React from "react";
import { cn } from "@/lib/utils";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref) => {
    return (
      <>
        <div className="flex gap-2 items-center">
          <input
            type={type}
            className={cn(
              "flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <div
              className={cn(
                `flex items-center -ml-8 ${
                  error ? "text-red-500" : "text-gray-500"
                }`
              )}
            >
              {icon}
            </div>
          )}
        </div>
        <p className="text-red-600 text-sm">{error}</p>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
