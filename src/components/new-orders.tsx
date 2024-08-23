"use client";

import { Button } from "@mantine/core";
import { Eye, Setting4 } from "iconsax-react";
import React from "react";
import Table from "./table";
import { useCustomTable } from "@/utils/hooks/custom-table-data";

import { ColumnDef } from "@tanstack/react-table";
import { unAccepted } from "./data/orders-data";
import { useRouter } from "next/navigation";
import Filter from "./filter";

export default function NewOrder() {
  const { push } = useRouter();
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "Order ID",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "name",
      header: "Customer Name",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "payment_type",
      header: "Payment Type",
      cell: (info) => (
        <p className="text-nowrap">{info.getValue() as string}</p>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="flex gap-[10px]">
          <button className="bg-[#F45B69] px-[13px] py-[8px] rounded-lg text-white">
            Reject
          </button>

          <button className="bg-[#3FC28A] px-[13px] py-[8px] rounded-lg text-white">
            Accept
          </button>
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div>
          <Eye size={24} color="#201A18" />
        </div>
      ),
    },
  ];

  const { table } = useCustomTable({
    tableData: unAccepted
      .filter((item) => item.status === "Unaccepted")
      .slice(-5),
    columns: column,
  });
  return (
    <section className="bg-white shadow-sm rounded-[16px] w-full flex flex-col flex-1 p-[20px] gap-[20px] justify-center">
      <div className="w-full flex justify-between">
        <p className="text-[20px] font-[700] leading-[30px]">New Orders</p>{" "}
        <Filter />
      </div>
      <Table table={table} />
      <button
        className="text-[16px] font-[700] leading-6 text-[#E1261C] px-5  !bg-transparent"
        onClick={() => {
          push("/order");
        }}
      >
        See All
      </button>
    </section>
  );
}
