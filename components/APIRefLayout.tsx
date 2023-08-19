import React from "react";
import Badge from "./Badge";

interface APIRefLayoutType {
  APIref: string;
}

const APIRefLayout = ({ APIref }: APIRefLayoutType) => {
  return (
    <a href={APIref} target="_blank" className="w-[124px] mt-5">
      <Badge
        size="md"
        background_color="bg-violet-100"
        label="API Reference"
        type="pill"
      />
    </a>
  );
};

export default APIRefLayout;
