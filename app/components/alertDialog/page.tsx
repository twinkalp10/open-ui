// "use client";
// import AlertDialogDemo from "@/components/Alert";
// import { Button } from "@/components/Button";
// import { TrashIcon } from "@heroicons/react/24/solid";
// import React from "react";

// const Page = () => {
//   const trigger = (
//     <Button variant={"secondary"} size={"small"}>
//       Delete Account
//     </Button>
//   );

//   const cancelItem = (
//     <Button variant={"destructive"} size={"small"}>
//       Cancel
//     </Button>
//   );

//   const actionItem = (
//     <Button variant={"outline"} size={"small"}>
//       Yes, delete account
//     </Button>
//   );

//   return (
//     <div>
//       <AlertDialogDemo
//         trigger={trigger}
//         size="square"
//         actionItem={actionItem}
//         cancelItem={cancelItem}
//         icon={<TrashIcon />}
//         iconColor="text-red-500"
//         title="Are you absolutely sure?"
//         description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
//       />
//     </div>
//   );
// };

// export default Page;
"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/AlertDialog";
import { TrashIcon } from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent size="rectangle">
          <AlertDialogHeader>
            <AlertDialogTitle icon={<TrashIcon className="text-red-400" />}>
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Page;
