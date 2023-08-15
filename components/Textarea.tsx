"use client";
import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={`${
            error && "border-red-300 focus:ring-red-300"
          } flex min-h-[128px] min-w-[320px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
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
