import Breadcrumbs from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/PreviewLayout";
import TitleLayout from "@/components/TitleLayout";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Loader2, ChevronRight } from "lucide-react";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Button",
    path: "/components/button",
  },
];

const code = `
import React from "react";
import { Button } from "@/components/Button";

const App = () => {
  return (
    <div>
      <Button variant="default" size="small">
        Submit
      </Button>
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
        title="Button"
        subtitle="Displays a button or a component that looks like a button. You can give it a variant, size, and other props."
      />

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Default button</p>
            <Button variant="default" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Secondary button</p>
            <Button variant="secondary" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Outline button</p>
            <Button variant="outline" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Link button</p>
            <Button variant="link" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Icon</p>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Destructive button</p>
            <Button variant="destructive" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Ghost button</p>
            <Button variant="ghost" size="small">
              Submit
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Loading button</p>
            <Button disabled variant="secondary" size="small">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              please wait...
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-gray-800 mb-2">Different Size</p>
          <div className="flex gap-2 justify-center items-center">
            <Button variant="default" size="small">
              small
            </Button>
            <Button variant="default" size="medium">
              medium
            </Button>
            <Button variant="default" size="lg">
              large
            </Button>
            <Button variant="default" size="xl">
              extra large
            </Button>
            <Button variant="default" size="doublexl">
              double extra large
            </Button>
            <Button
              variant="default"
              size="icon"
              className="border rounded-full"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
