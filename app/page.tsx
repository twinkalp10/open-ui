"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col space-y-14 font-inter max-w-3xl md:max-w-5xl mt-8 ml-8 mb-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-5xl font-semibold tracking-normal leading-tight">
          An open-source <br /> UI component library.
        </h1>
        <p className="text-lg text-gray-800">
          A component library for building high-quality, accessible design
          systems and web apps.
        </p>
      </div>

      <div className="flex flex-col space-y-7">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Introduction</h1>
          <p className="text-gray-800">
            Re-usable components built using Radix UI and Tailwind CSS.
          </p>
        </div>
        <p>
          It's not a component library. instead, it's a collection of reusable
          components ready for you to seamlessly integrate into your
          applications by simply copying and pasting.
        </p>

        <p>
          <b>What do you mean by not a component library?</b>
        </p>
        <p>
          It's important to clarify that these components are not part of a
          traditional component library that you install as a dependency through
          tools like npm.
        </p>
        <p>
          Instead, you have the freedom to handpick the specific components you
          require. By copying and pasting the code directly into your project,
          you can effortlessly integrate these components.
        </p>
        <p>
          <i>
            The beauty lies in the fact that the code becomes entirely yours to
            customize according to your project's unique requirements.
          </i>
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-bold">FAQ</h1>
        <div className="text-gray-800">
          <Accordion type="single" collapsible className="max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I use this in my project?</AccordionTrigger>
              <AccordionContent>
                Absolutely, these components are available for both personal and
                commercial projects without any charge. You are not obligated to
                provide attribution when using them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic. For icons, it uses different icon
                sets. You can check the same in styles section on the left.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How I can use your code?</AccordionTrigger>
              <AccordionContent>
                You just need to copy and paste the code into component file.
                You can import or use it directly in your UI code.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
