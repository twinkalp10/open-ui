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
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import APIRefLayout from "@/components/APIRefLayout";
import PreviewLayout from "@/components/PreviewLayout";
import { Button } from "@/components/Button";
import DependencyLayout from "@/components/DependencyLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Alert Dialog",
    path: "/components/alertDialog",
  },
];

const code = `
import React from 'react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogHeader, AlertDialogFooter } from "@/components/AlertDialog";
import { TrashIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-gray-800 mb-2">Alert Dialog with square container</p>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent size="square">
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
              <AlertDialogCancel>
                <Button variant="destructive">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Button variant="secondary">Continue</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
)
};
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Alert Dialog"
        subtitle="A modal dialog that interrupts the user with important content and expects a response. You can choose container to show the alert dialog in rectangle or square."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference" />

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Alert Dialog with square container
            </p>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="outline">Open Square Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="square">
                <AlertDialogHeader>
                  <AlertDialogTitle
                    icon={<TrashIcon className="text-red-400" />}
                  >
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Button variant="destructive">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="secondary">Continue</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Alert Dialog with rectangle container
            </p>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="outline">Open Rectangle Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="rectangle">
                <AlertDialogHeader>
                  <AlertDialogTitle
                    icon={<TrashIcon className="text-red-400" />}
                  >
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Button variant="destructive">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button variant="secondary">Continue</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-alert-dialog" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
