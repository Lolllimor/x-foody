import AppLayout from "@/src/components/app-layout";
import DashCards from "@/src/components/dash-cards";
import DashCharts from "@/src/components/dash-chart";
import NewOrder from "@/src/components/new-orders";
import React from "react";

export default function Dasboard() {
  return (
    <AppLayout pageTitle="Dashboard">
      <div className="flex flex-col gap-[20px] overflow-auto flex-1 !h-full">
        <DashCards />
        <DashCharts />
        <NewOrder />
      </div>
    </AppLayout>
  );
}
