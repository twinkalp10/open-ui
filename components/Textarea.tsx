"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div>
        <textarea
          className={cn(
            `${
              error && "border-red-300 focus:ring-red-300"
            } min-h-[128px] min-w-[320px] rounded-md border border-gray-400 bg-white px-3 py-2 text-sm focus:ring-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />

        <p className="text-sm text-red-500 mt-1" id="error">
          {error}
        </p>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
