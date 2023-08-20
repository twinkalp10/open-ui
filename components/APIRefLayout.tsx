import React from "react";
import Badge from "./Badge";

interface APIRefLayoutType {
  APIref: string;
}

const APIRefLayout = ({ APIref }: APIRefLayoutType) => {
  return (
    <div className="mt-5">
      <a href={APIref} target="_blank" className="w-[124px]">
        <Badge
          size="md"
          label="API Reference"
          container="pill"
          className="text-gray-800 bg-violet-200"
        />
      </a>
    </div>
  );
};

export default APIRefLayout;
