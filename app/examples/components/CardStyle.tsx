import CardDemo from "@/components/examples/CardDemo";
import React from "react";

const CardStyle = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-semibold">Card Design</p>
        <p className="text-gray-600">
          This card has been created using the Card component and its associated
          sub-components. The Card component is constructed by combining various
          other elements such as CardHeader, CardContent, CardTitle, and
          CardDescription. Additionally, the Select component has been
          integrated into this card design.
        </p>
        <ul className="flex flex-col gap-2 list-disc ml-8 text-gray-600">
          <li>Card</li>
          <li>Select</li>
          <li>Input</li>
          <li>Button</li>
          <li>Avatar</li>
        </ul>
      </div>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <CardDemo />
      </div>
    </div>
  );
};

export default CardStyle;
