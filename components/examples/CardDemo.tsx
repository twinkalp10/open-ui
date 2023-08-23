import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Input } from "../Input";
import { Button } from "../Button";
import { Separator } from "../Separator";
import { AvatarImage, AvatarRoot, AvatarFallback } from "../Avatar";

const CardDemo = () => {
  return (
    <Card className="sm:w-[400px] text-gray-800 mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
        <CardContent>
          <div className="flex space-x-2 my-2">
            <Input
              placeholder="https://www.figma.com"
              readOnly
              className="w-64"
            />
            <Button variant="default">Copy</Button>
          </div>
          <Separator className="my-4 bg-gray-300" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium">People with access</h4>
            <div className="flex space-y-3 flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AvatarRoot>
                    <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
                    <AvatarFallback>OM</AvatarFallback>
                  </AvatarRoot>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      Parry hotter
                    </p>
                    <p className="text-sm text-muted-foreground">
                      p@example.com
                    </p>
                  </div>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem value="edit">Can Edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AvatarRoot>
                    <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                    <AvatarFallback>OM</AvatarFallback>
                  </AvatarRoot>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      Smaun Titch
                    </p>
                    <p className="text-sm text-muted-foreground">
                      s@example.com
                    </p>
                  </div>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem value="edit">Can Edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AvatarRoot>
                    <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
                    <AvatarFallback>OM</AvatarFallback>
                  </AvatarRoot>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      Juliana Doe
                    </p>
                    <p className="text-sm text-muted-foreground">
                      j@example.com
                    </p>
                  </div>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem value="edit">Can Edit</SelectItem>
                        <SelectItem value="view">Can view</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default CardDemo;
