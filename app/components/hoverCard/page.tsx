import { Button } from "@/components/Button";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import React from "react";

const Page = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div>This is content</div>
        <HoverCardArrow className="fill-gray-100" height="10px" />
      </HoverCardContent>
    </HoverCard>
  );
};

export default Page;
