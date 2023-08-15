import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import React from "react";

const Page = () => {
  return (
    <div>
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
};

export default Page;
