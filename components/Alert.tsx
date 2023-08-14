// "use client";
// import React from "react";
// import * as AlertDialog from "@radix-ui/react-alert-dialog";
// import { cva, type VariantProps } from "class-variance-authority";

// interface AlertDialogDemoProps extends VariantProps<typeof contentSize> {
//   trigger: React.ReactNode;
//   cancelItem?: React.ReactNode;
//   actionItem?: React.ReactNode;
//   title: string;
//   description: string;
//   icon?: React.ReactNode;
//   iconColor?: string;
//   rootProps?: React.ComponentProps<typeof AlertDialog.Root>;
//   triggerProps?: React.ComponentProps<typeof AlertDialog.Trigger>;
// }

// const contentSize = cva(
//   `data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`,
//   {
//     variants: {
//       size: {
//         rectangle: "w-[500px] max-h-[200px]",
//         square: "w-[350px] max-h-[320px]",
//       },
//     },
//     defaultVariants: {
//       size: "square",
//     },
//   }
// );

// const AlertDialogDemo = ({
//   trigger,
//   cancelItem,
//   actionItem,
//   size,
//   title,
//   description,
//   icon,
//   iconColor,
//   rootProps,
//   triggerProps,
// }: AlertDialogDemoProps) => (
//   <AlertDialog.Root {...rootProps}>
//     <AlertDialog.Trigger {...triggerProps}>{trigger}</AlertDialog.Trigger>
//     <AlertDialog.Portal>
//       <AlertDialog.Overlay
//         {...AlertDialog.Overlay}
//         className="bg-slate-100 opacity-70 fixed inset-0"
//       />
//       <AlertDialog.Content
//         className={`${contentSize({
//           size,
//         })}`}
//       >
//         <AlertDialog.Title className="text-gray-800 m-0 text-[17px] font-medium">
//           <div
//             className={`flex gap-3 ${
//               size === "rectangle" ? "flex-row items-center" : "flex-col"
//             }`}
//           >
//             {icon && (
//               <div
//                 className={`w-5 h-5 flex justify-center items-center ${iconColor}`}
//               >
//                 {icon}
//               </div>
//             )}
//             {title}
//           </div>
//         </AlertDialog.Title>
//         <AlertDialog.Description className="text-gray-800 mt-4 mb-5 text-[15px] leading-normal">
//           {description}
//         </AlertDialog.Description>
//         <div
//           className={`flex justify-end gap-[25px] ${
//             size === "rectangle" ? "flex-row" : "flex-col"
//           }`}
//         >
//           <AlertDialog.Cancel asChild>
//             {cancelItem ? (
//               cancelItem
//             ) : (
//               <button className="bg-gray-300 text-black hover:bg-gray-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
//                 Cancel
//               </button>
//             )}
//           </AlertDialog.Cancel>
//           <AlertDialog.Action asChild>
//             {actionItem ? (
//               actionItem
//             ) : (
//               <button className="bg-gray-300 text-black hover:bg-gray-400 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
//                 Cancel
//               </button>
//             )}
//           </AlertDialog.Action>
//         </div>
//       </AlertDialog.Content>
//     </AlertDialog.Portal>
//   </AlertDialog.Root>
// );

// export default AlertDialogDemo;

"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { VariantProps, cva } from "class-variance-authority";

interface AlertDialogProps extends VariantProps<typeof AlertVariants> {
  icon?: React.ReactNode;
  iconcolor?: string;
}

const AlertVariants = cva(
  `data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`,
  {
    variants: {
      size: {
        rectangle: "w-[500px] max-h-[200px]",
        square: "w-[350px] max-h-[320px]",
      },
    },
    defaultVariants: {
      size: "square",
    },
  }
);

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = ({
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal {...props} />
);

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ children, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Overlay
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      {...props}
      ref={ref}
    />
  </AlertDialogPortal>
));

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> &
    AlertDialogProps
>(({ size, ...props }, ref) => (
  <AlertDialogPrimitive.Content
    ref={ref}
    className={`${AlertVariants({
      size,
    })} fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg `}
    {...props}
  />
));

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> &
    AlertDialogProps
>(({ children, icon, iconcolor, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={`flex gap-3 text-lg font-semibold`}
      {...props}
    >
      <div className="flex justify-center items-center gap-3">
        {icon && (
          <div
            className={`w-5 h-5 flex justify-center items-center ${iconcolor}`}
          >
            {icon}
          </div>
        )}
        <div>{children}</div>
      </div>
    </AlertDialogPrimitive.Title>
  );
});

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className="text-sm text-muted-foreground"
    {...props}
  />
));

const AlertDialogHeader = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="flex flex-col space-y-2 text-center sm:text-left"
    {...props}
  />
);

const AlertDialogFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
    {...props}
  />
);

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ ...props }, ref) => <AlertDialogPrimitive.Action ref={ref} {...props} />);

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ ...props }, ref) => <AlertDialogPrimitive.Cancel ref={ref} {...props} />);

AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
AlertDialogHeader.displayName = "AlertDialogHeader";
AlertDialogFooter.displayName = "AlertDialogFooter";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
};
