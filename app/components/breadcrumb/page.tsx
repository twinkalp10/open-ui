import APIRefLayout from "@/components/APIRefLayout";
import Breadcrumbs from "@/components/Breadcrumb";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/PreviewLayout";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Breadcrumb",
    path: "/components/breadcrumb",
  },
];

const code = `
import React from 'react';
import Breadcrumbs from "@/components/Breadcrumb";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Breadcrumb",
    path: "/components/breadcrumb",
  },
];

const App = () => {
  return (
    <div>
      <Breadcrumbs separator="arrow" items={Items} />
    </div>
    );
  };

export default App;
  `;

const Page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />

      {/* Heading */}
      <div className="mt-5">
        <TitleLayout
          title="BreadCrumbs"
          subtitle="Display breadcrumbs with slash or arrow separator with your chosen
        Initial Icon."
        />
      </div>

      {/* API Reference */}

      {/* Example */}
      <PreviewLayout>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-sm">With arrow separator</p>
            <Breadcrumbs separator="arrow" items={Items} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-sm">With slash separator</p>
            <Breadcrumbs separator="slash" items={Items} />
          </div>
        </div>
      </PreviewLayout>

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
