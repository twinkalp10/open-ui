import CardDemo from "@/components/examples/CardDemo";
import React from "react";

const CardStyle = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-semibold">Card Design</p>
        <p className="text-gray-600">
          This Card has been designed with Card component and its
          sub-components. The Card component is a composition of other
          components like CardHeader, CardContent, CardTitle, CardDescription.
          The Select component is also used in this Card.
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
