import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import React from "react";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const CreateTeam = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="small">
          <PlusCircledIcon className="mr-2 h-5 w-5" />
          Create new Team
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="w-60 col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="department" className="text-right">
              Department
            </Label>
            <Input id="department" className="w-60 col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="destructive">Cancel</Button>
          <Button
            type="submit"
            variant="secondary"
            className="text-gray-600 font-light"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeam;
