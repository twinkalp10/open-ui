import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tab";
import React from "react";

const Page = () => {
  return (
    <Tabs defaultValue="account" className="w-[300px]">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="account" variant="filled">
          Signup
        </TabsTrigger>
        <TabsTrigger value="password" variant="filled">
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Create your account here.</TabsContent>
      <TabsContent value="password">Login password here.</TabsContent>
    </Tabs>
  );
};

export default Page;
