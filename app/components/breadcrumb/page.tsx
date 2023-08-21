"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/Separator";
import Breadcrumbs from "@/components/Breadcrumb";
import CodeBlock from "@/components/CodeLayout";
import PreviewLayout from "@/components/ExamplesLayout";
import TitleLayout from "@/components/TitleLayout";
import React from "react";

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Breadcrumb",
    path: "/components/breadcrumb",
  },
];

const code = `import { ChevronRightIcon, SlashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Breadcrumbs = ({
  separator = "arrow",
  items,
  initialIcon,
}: BreadcrumbsType) => {
  const newItems = getAllItems(items);
  const totalItems = newItems.length;
  if (!totalItems) return null;

  return (
    <div className="flex items-center text-sm font-medium text-gray-900 space-x-3">
      {initialIcon && <div>{initialIcon}</div>}
      {newItems.map((item, index) => {
        return (
          <Crumbs
            showInitialSeparator={!!initialIcon && index === 0}
            item={item}
            separator={separator}
            heightLight={index === totalItems - 1}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

export interface BreadcrumbsItemType {
  label: string;
  path: string;
}

export interface BreadcrumbsType {
  separator?: "arrow" | "slash";
  items: BreadcrumbsItemType[];
  initialIcon?: React.ReactNode;
}

interface CrumbType {
  heightLight?: boolean;
  separator: "arrow" | "slash";
  item: BreadcrumbsItemType;
  showInitialSeparator: boolean;
}

const getAllItems = (items: BreadcrumbsItemType[]) => {
  const totalItems = items.length;
  if (totalItems < 4) return items;
  const lastThreeItems = items.slice(-3);
  const firstItem = items[0];
  return [firstItem, ...lastThreeItems].map((item, index) => {
    if (index === 1) return { ...item, label: "..." };
    return item;
  });
};

const Crumbs = ({
  heightLight,
  item,
  separator,
  showInitialSeparator,
}: CrumbType) => {
  const separatorIcon =
    separator === "arrow" ? <ChevronRightIcon /> : <SlashIcon />;

  return (
    <>
      {showInitialSeparator && separatorIcon}
      <Link
        className={\`\${heightLight && "font-bold"} text-base\`}
        href={item.path}
      >
        {item.label}
      </Link>
      {!heightLight && separatorIcon}
    </>
  );
};
`;

const previewCode = `
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

      {/* Tabs */}
      <div className="mt-12">
        <p className="text-gray-800">Preview</p>
        <Separator className="max-w-[60px] mb-5 mt-1" />
        <Tabs
          defaultValue="code"
          className="bg-white py-4 border border-gray-100 shadow sm:rounded-lg max-w-4xl"
        >
          <TabsList className="flex w-28 justify-between items-center gap-5 pl-4">
            <TabsTrigger value="preview" variant="underline">
              UI
            </TabsTrigger>
            <TabsTrigger value="code" variant="underline">
              Code
            </TabsTrigger>
          </TabsList>
          <div className="my-4 flex justify-center items-center">
            <TabsContent value="preview">
              <div className="flex flex-col gap-1">
                <p className="text-gray-600 text-sm">With arrow separator</p>
                <Breadcrumbs separator="arrow" items={Items} />
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="w-72 md:w-[900px] sm:w-64 max-w-[600px]">
                <SyntaxHighlighter
                  language="jsx"
                  style={dracula}
                  customStyle={{
                    height: "350px",
                    width: "800px",
                    overflowX: "auto",
                    overflowY: "auto",
                  }}
                >
                  {previewCode}
                </SyntaxHighlighter>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

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

      {/* Dependencies */}

      {/* Code */}
      <CodeBlock code={code} />
    </div>
  );
};

export default Page;
