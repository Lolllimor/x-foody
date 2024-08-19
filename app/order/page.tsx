import AppLayout from "@/src/components/app-layout";
import OrderTab from "@/src/components/order-tab";
import TabHeader from "@/src/components/tab-header";
import React from "react";

export default function Orders() {
  return (
    <AppLayout pageTitle="My Orders">
      <TabHeader />
      <OrderTab />
    </AppLayout>
  );
}
