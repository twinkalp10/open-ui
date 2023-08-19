"use client";
import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";

const avatarVariants = cva("", {
  variants: {
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
    },
    container: {
      circle: "rounded-full",
      square: "rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
    container: "circle",
  },
});
interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    VariantProps<typeof AvatarPrimitive.Image> {
  src: string;
  indicator?: React.ReactNode;
}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className="relative" {...props} />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

type ImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;

const AvatarImage = React.forwardRef<ImageRef, AvatarProps>(
  ({ size, container, indicator, src, ...props }, ref) => {
    const imageStyles = avatarVariants({
      size,
      container,
    });

    return (
      <div className="relative">
        <AvatarPrimitive.Image
          ref={ref}
          src={src}
          className={`${imageStyles} flex items-center justify-center`}
          {...props}
        />
        {indicator && (
          <div className={`flex justify-center items-center z-50`}>
            {indicator}
          </div>
        )}
      </div>
    );
  }
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className="flex h-9 w-9 items-center justify-center rounded-full"
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };
