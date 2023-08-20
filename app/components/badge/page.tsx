import Badge from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumb";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/PreviewLayout";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Badge",
    path: "/components/badge",
  },
];

const code = `
import React from 'react';
import Badge from "@/components/Badge";

const App = () => {
  return (
    <Badge
    label="label"
    size="lg"
    container="pill"
    className="text-red-800 bg-red-200"
    />
  );
};
`;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <TitleLayout
        title="Badge"
        subtitle="Display badge with your chosen color and style. You can give it a pill or box container. Also size can be small, medium or large."
      />

      {/* Example */}
      <PreviewLayout>
        <div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Pill container and small size</p>
            <Badge
              label="label"
              size="sm"
              container="pill"
              className="text-gray-800 bg-green-200"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Box container and Medium size</p>
            <Badge
              label="label"
              size="md"
              container="box"
              className="text-red-800 bg-red-200"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-gray-800 mb-2">Pill container and Large size</p>
            <Badge
              label="label"
              size="lg"
              container="pill"
              className="text-gray-800 bg-blue-200"
            />
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
