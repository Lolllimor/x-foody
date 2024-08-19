import AppLayout from "@/src/components/app-layout";
import StaffHeader from "@/src/components/staff-header";
import StaffTable from "@/src/components/staff-table";
import React from "react";

export default function Staff() {
  return (
    <AppLayout pageTitle="My Staffs">
      <StaffHeader btnLabel=" Add New Member" />
      <StaffTable />
    </AppLayout>
  );
}
