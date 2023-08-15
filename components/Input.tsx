import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={`${
            error && "border-red-300 focus:ring-red-300"
          } h-10 w-80 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          ref={ref}
          {...props}
        />
        {icon && (
          <div
            className={`absolute h-5 w-5 ${
              error ? "text-red-500" : "text-gray-500"
            } inset-y-0 left-72 top-2 flex items-center pointer-events-none`}
          >
            {icon}
          </div>
        )}

        <p className="text-sm text-red-500 mt-1" id="error">
          {error}
        </p>
      </div>
    );
  }
);
Input.displayName = "Input";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-sm text-red-500 mt-1">{children}</div>;
};

export { Input };
