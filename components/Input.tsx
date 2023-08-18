import React from "react";
import { cn } from "@/lib/utils";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ width = "w-80", className, icon, error, ...props }, ref) => {
    return (
      <div className="relative">
        <div
          className={cn(
            `${width} flex w-80 rounded-md border px-3 py-2 text-sm`,
            error && "border-red-300 focus:ring-red-300",
            className
          )}
        >
          <input
            className={cn(
              `flex-1 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <div
              className={cn(
                `flex items-center ${error ? "text-red-500" : "text-gray-500"}`
              )}
            >
              {icon}
            </div>
          )}
        </div>

        <p className={cn("text-sm text-red-500 mt-1")} id="error">
          {error}
        </p>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
