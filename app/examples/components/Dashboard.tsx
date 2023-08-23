"use client";
import CreateTeam from "@/app/examples/components/CreateTeam";
import Profile from "@/app/examples/components/Profile";
import TeamSwitcher from "@/app/examples/components/TeamSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
} from "@/components/Card";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard";
import { Separator } from "@/components/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import {
  EllipsisVerticalIcon,
  CurrencyDollarIcon,
  WalletIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Overview from "./Overview";
import Savings from "./Savings";

const Dashboard = () => {
  return (
    <div className="border border-gray-200">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <TeamSwitcher />
          <CreateTeam />
        </div>
        <Profile />
      </div>
      <Separator className="bg-gray-200" />
      <div className="p-8 flex flex-col gap-8">
        <h2 className=" text-3xl font-bold tracking-tight">Dashboard</h2>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <div className="bg-slate-200 rounded-lg px-1 py-0.5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardIcon>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-32">
                          <div className="text-sm text-gray-400">
                            Jan 2023 - Aug 2023
                          </div>
                          <HoverCardArrow
                            className="fill-gray-100"
                            height="10px"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    </CardIcon>
                    <CardTitle className="text-base flex items-center gap-2">
                      Expenses <CurrencyDollarIcon className="w-6 h-6 " />
                    </CardTitle>
                    <CardDescription className="text-lg">
                      $1,250.00
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 flex flex-col text-sm">
                      <p>Your Bank balance</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardIcon>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-32">
                          <div className="text-sm text-gray-400">
                            Jan 2023 - Aug 2023
                          </div>
                          <HoverCardArrow
                            className="fill-gray-100"
                            height="10px"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    </CardIcon>
                    <CardTitle className="text-base flex items-center gap-2">
                      Savings
                      <WalletIcon className="w-6 h-6 " />
                    </CardTitle>
                    <CardDescription className="text-lg">
                      $3,569.00
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 flex flex-col text-sm">
                      <p>All acounts</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardIcon>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-32">
                          <div className="text-sm text-gray-400">
                            Jan 2023 - Aug 2023
                          </div>
                          <HoverCardArrow
                            className="fill-gray-100"
                            height="10px"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    </CardIcon>
                    <CardTitle className="text-base flex items-center gap-2">
                      working days
                      <BuildingOffice2Icon className="w-6 h-6 " />
                    </CardTitle>
                    <CardDescription className="text-lg">7</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 flex flex-col text-sm">
                      <p>per week</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardIcon>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-32">
                          <div className="text-sm text-gray-400">
                            Jan 2023 - Aug 2023
                          </div>
                          <HoverCardArrow
                            className="fill-gray-100"
                            height="10px"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    </CardIcon>
                    <CardTitle className="text-base flex items-center gap-2">
                      spends <ShoppingBagIcon className="w-6 h-6 " />
                    </CardTitle>
                    <CardDescription className="text-lg">
                      $3,287.49
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 flex flex-col text-sm">
                      <p>per week</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-10">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Total Savings</CardTitle>
                    <CardDescription>
                      You did $567 savings this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Savings />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
