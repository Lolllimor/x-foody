import AppLayout from "@/src/components/app-layout";
import OrderDetail from "@/src/components/order-detail";
import React from "react";

export default function ViewOrder() {
  return (
    <AppLayout pageTitle="View Order" arrayCrumb={["My Order", "View Order"]}>
      <div className="flex flex-col gap-[20px]">
        <OrderDetail />
      </div>
    </AppLayout>
  );
}
