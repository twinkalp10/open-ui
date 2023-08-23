"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const iconsDependencies = `
npm install @radix-ui/react-icons
npm install @heroicons/react
npm install lucide-react
`;

const dependencies = `
npm install @radix-ui/react-avatar

`;

const Items = [
  { label: "Home", path: "/" },
  {
    label: "Styles",
    path: "/styles",
  },
];

const page = () => {
  return (
    <div className="p-4">
      <Breadcrumbs separator="arrow" items={Items} />
      <div className="flex flex-col space-y-14 font-inter max-w-3xl md:max-w-5xl py-6">
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">Installation</h1>
            <p className="text-gray-800">
              Radix Primitives are designed without any predefined styles and
              are compatible with any styling solution, empowering you with full
              control over the styling process.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">Icons</h1>
            <p className="text-gray-800">
              For displaying icons that align with specific requirements,
              I&apos;ve incorporated icons from alternative sources. Feel free
              to use icons from any source that suits your preferences.
            </p>
            <div>
              <SyntaxHighlighter
                language="jsx"
                style={dracula}
                customStyle={{ maxHeight: "700px", overflowY: "auto" }}
              >
                {iconsDependencies}
              </SyntaxHighlighter>
            </div>
            <p className="text-gray-800">
              I&apos;ve utilized icons from Radix Icons, Heroicons, and Lucide
              React. To learn more about how to employ these icons, you can
              visit their official websites for detailed guidance on usage and
              integration.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">Dependency</h1>
            <p className="text-gray-800">
              Some of the components are using the Radix Primitives, so you need
              to install it first. For example, if you are using the{" "}
              <b>Avatar</b> component, you need to install the{" "}
              <b>@radix-ui/react-avatar</b> package. You can install it by
              following command:
            </p>
            <div>
              <SyntaxHighlighter
                language="jsx"
                style={dracula}
                customStyle={{ maxHeight: "700px", overflowY: "auto" }}
              >
                {dependencies}
              </SyntaxHighlighter>
            </div>
            <p className="text-gray-800">
              Each component is accompanied by its respective dependencies when
              utilizing Radix Primitives. For detailed insights, you can explore
              the source code of each component. Additionally, I've included the
              API reference of Radix Primitives within the component page to
              provide comprehensive information.
            </p>
          </div>

          <h1 className="text-xl font-bold">Functional Styles:</h1>
          <p className="text-gray-800">
            You have complete authority over every facet of styling, even
            functional styles. Take, for instance, a Dialog Overlay, which
            won&apos;t inherently span the entire viewport. It&apos;s your
            prerogative to incorporate these styles along with any presentation
            styles.
          </p>
          <h1 className="text-xl font-bold">Classes:</h1>
          <p className="text-gray-800">
            All components and their constituents accept a <b>className</b>{" "}
            prop. This prop will be transferred to the underlying DOM element,
            enabling you to utilize it in CSS as you would anticipate.
          </p>
          <h1 className="text-xl font-bold">Data Attributes:</h1>
          <p className="text-gray-800">
            In scenarios where components exhibit state, that state is exposed
            through data attributes. For instance, when an Accordion Item is
            expanded, it includes a <b>data-state=&quot;open&quot;</b>{" "}
            attribute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
