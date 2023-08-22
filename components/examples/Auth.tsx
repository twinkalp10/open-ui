import React from "react";
import { Input } from "../Input";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";
import { Separator } from "../Separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Auth = () => {
  return (
    <div className="sm:w-[350px] w-96 text-gray-800 mx-auto">
      <div className="grid gap-3">
        <form>
          <div className="grid gap-2">
            <div>
              <Input
                className="w-full"
                id="email"
                type="email"
                placeholder="dugu@doogle.com"
                icon={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <QuestionMarkCircleIcon className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        sideOffset={5}
                        className="bg-gray-200"
                      >
                        <p>Please enter right email</p>
                        <TooltipArrow className="fill-gray-200" offset={10} />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
              />
            </div>
            <Button variant="default" size="lg">
              Sign in with Email
            </Button>
          </div>
        </form>
        <div className="relative text-sm">
          <Separator className="my-4" />
          <p className="absolute top-1.5 left-[30%] z-50 bg-white">
            OR CONTINUE WITH
          </p>
        </div>
        <div className="grid">
          <Button variant="outline" size="lg">
            <GitHubLogoIcon className="h-4 w-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
