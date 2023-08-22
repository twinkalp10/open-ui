"use client";
import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Separator } from "@/components/Separator";

const Footer = () => {
  return (
    <footer className="font-inter w-full  z-50 bg-white">
      <Separator orientation="horizontal" className="bg-gray-200" />
      <div className="flex flex-col max-w-6xl md:space-x-8 px-12 gap-4 items-center md:flex-row md:justify-between my-6">
        <div>@2023 built by Twinkal Patel</div>
        <div className="flex justify-center items-center space-x-4">
          <a
            target="_blank"
            href="https://github.com/twinkalp10"
            className="cursor-pointer"
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/twinkal-patel-1952b2150"
            className="cursor-pointer"
          >
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="mailto:twinkal.work@outlook.com"
            className="cursor-pointer"
          >
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
