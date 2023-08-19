import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import React from "react";
import { Cog6ToothIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import PreviewLayout from "@/components/PreviewLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Alert",
    path: "/components/alert",
  },
];

const code = `
import React from 'react';
import { Alert, AlertDescription, AlertFooter, AlertTitle } from "@/components/Alert";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";

const App = () => {
  return (
    <div>
      <Alert variant="primary" container="square" icon={<Cog6ToothIcon />}>
        <AlertTitle>This is a primary alert — check it out!</AlertTitle>
        <AlertDescription>
          This is a primary description — you can change it using variant props
        </AlertDescription>
        <AlertFooter>
          <Button variant="default" size="small">
            Save
          </Button>
          <Button variant="secondary" size="small">
            Cancel
          </Button>
        </AlertFooter>
      </Alert>
    </div>
  );
};

  `;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Alert"
        subtitle="Displays a callout for user attention. You can set the variant to change the color of the alert, icon, and size of it using container props."
      />

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">
              Alert with primary variant and square container
            </p>
            <Alert
              variant="primary"
              container="square"
              icon={<ArrowRightIcon />}
            >
              <AlertTitle>This is a primary alert — check it out!</AlertTitle>
              <AlertDescription>
                This is a primary description — you can change it using variant
                props
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 ">
              Alert with error variant and rectangle container
            </p>
            <Alert
              variant="error"
              container="rectangle"
              icon={<Cog6ToothIcon />}
            >
              <AlertTitle>This is a primary alert — check it out!</AlertTitle>
              <AlertDescription>
                This is a primary description — you can change it using variant
                props
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
