import AppLayout from "@/src/components/app-layout";
import FoodTable from "@/src/components/food-table";
import MenuHeader from "@/src/components/menu-header";
import TabHeader from "@/src/components/tab-header";
import { Button } from "@mantine/core";
import React from "react";

export default function Menu() {
  return (
    <AppLayout pageTitle="Menu Items">
      <MenuHeader />
      <FoodTable />
    </AppLayout>
  );
}
