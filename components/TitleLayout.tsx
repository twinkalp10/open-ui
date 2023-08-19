import React from "react";
import Badge from "./Badge";

const TitleLayout = ({ title, subtitle }: TitleLayoutType) => {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-4xl font-bold">{title}</p>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default TitleLayout;

interface TitleLayoutType {
  title: string;
  subtitle: string;
}
