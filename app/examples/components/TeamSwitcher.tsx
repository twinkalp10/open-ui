import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import React from "react";

const TeamSwitcher = () => {
  return (
    <Select>
      <SelectTrigger className="w-60">
        <SelectValue placeholder="Select name" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Name</SelectLabel>
          <SelectItem value="juliana">Juliana</SelectItem>
          <SelectItem value="parry">Parry</SelectItem>
          <SelectItem value="swaun">Swaun</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TeamSwitcher;
