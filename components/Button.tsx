import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center font-inter text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white hover:bg-primary-700 rounded-lg border-primary-600 border-2",
        secondary:
          "bg-gray-300 text-black hover:bg-gray-400 rounded-lg border-gray-300 border-2",
        destructive:
          "bg-error-600 text-white hover:bg-error-700 rounded-lg border-error-600 border-2",
        ghost:
          "hover:bg-gray-100 text-black hover:rounded-lg hover:border-gray-100 hover:border-2",
        link: "text-primary-800 underline-offset-4 hover:underline",
        outline: "bg-transparent rounded-lg border-gray-300 border-2",
      },
      size: {
        small: "px-3.5 py-2",
        medium: "px-3.5 py-2.5",
        lg: "px-4 py-2.5",
        xl: "px-5 py-3",
        doublexl: "px-7 py-4",
        icon: " h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;
