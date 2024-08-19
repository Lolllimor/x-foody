import AppLayout from "@/src/components/app-layout";
import StaffDetail from "@/src/components/staff-detail";
import React from "react";

export default function ViewOrder() {
  return (
    <AppLayout pageTitle="View Order" arrayCrumb={["My Staff", "View Staff"]}>
      <div className="flex flex-col gap-[20px]">
        <StaffDetail />
      </div>
    </AppLayout>
  );
}
