import CreateTeam from "@/app/examples/components/CreateTeam";
import Profile from "@/app/examples/components/Profile";
import TeamSwitcher from "@/app/examples/components/TeamSwitcher";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <TeamSwitcher />
          <CreateTeam />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
