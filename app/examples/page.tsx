import AuthStyle from "./components/AuthStyle";
import React from "react";
import CardStyle from "./components/CardStyle";
import Dashboard from "@/components/examples/Dashboard";

const page = () => {
  return (
    <div className="flex flex-col font-inter max-w-3xl md:max-w-5xl mt-8 ml-8 mb-8 leading-relaxed">
      <div className="flex flex-col gap-32">
        <AuthStyle />
        <CardStyle />
        <Dashboard />
      </div>
    </div>
  );
};

export default page;
