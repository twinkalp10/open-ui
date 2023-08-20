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
          background_color="bg-violet-100"
          label="API Reference"
          type="pill"
        />
      </a>
    </div>
  );
};

export default APIRefLayout;
