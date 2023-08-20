"use client";
import Checkbox from "@/components/Checkbox";
import { Circle } from "lucide-react";
import React from "react";
import { MinusSmallIcon, CheckIcon } from "@heroicons/react/24/solid";

import Breadcrumbs from "@/components/Breadcrumb";
import TitleLayout from "@/components/TitleLayout";
import PreviewLayout from "@/components/PreviewLayout";
import DependencyLayout from "@/components/DependencyLayout";
import APIRefLayout from "@/components/APIRefLayout";
import CodeBlock from "@/components/CodeLayout";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Checkbox",
    path: "/components/checkbox",
  },
];

const code = `
import React from 'react';
import Checkbox from "@/components/Checkbox";
import { MinusSmallIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <div className="flex items-center">
      <Checkbox
        size="medium"
        container="box"
        id="checkbox"
        icon={<MinusSmallIcon />}
      />
      <label htmlFor="checkbox" className="ml-2">
        Accept terms and conditions.
      </label>
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
        title="Checkbox"
        subtitle="A checkbox with a label that can be toggled on and off. You can select container type and size. Also, you can pass an icon to the checkbox."
      />

      {/* API Reference */}
      <APIRefLayout APIref="https://www.radix-ui.com/primitives/docs/components/checkbox#api-reference" />

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <div className="flex items-center">
              <Checkbox
                size="small"
                container="box"
                id="checkbox"
                icon={<CheckIcon className="w-3 h-3" />}
              />
              <label htmlFor="checkbox" className="ml-2">
                Box Checkbox with small size with check icon.
              </label>
            </div>

            <div className="mt-16">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center">
                  <Checkbox
                    size="medium"
                    container="circle"
                    id="checkbox"
                    icon={<Circle className="fill-violet-800 w-2 h-2" />}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Round Checkbox with medium size with filled circle icon.
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center">
                  <Checkbox
                    size="large"
                    container="box"
                    id="checkbox"
                    icon={<MinusSmallIcon />}
                  />
                  <label htmlFor="checkbox" className="ml-2">
                    Box Checkbox with large size with minus icon.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PreviewLayout>

      {/* Dependencies */}
      <DependencyLayout dependency="npm install @radix-ui/react-checkbox" />

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
