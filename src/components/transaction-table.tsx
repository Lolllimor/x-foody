"use client";
import { useCustomTable } from "@/utilis/hooks/custom-table-data";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { Eye } from "iconsax-react";
import { useRouter } from "next/navigation";
import React from "react";
import { transactionData } from "./data/transaction-data";
import Table from "./table";

export default function TransactionTable() {
  const { push } = useRouter();
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "Transaction ID",
      cell: (info) => <p>#{info.getValue() as string}</p>,
    },
    {
      accessorKey: "name",
      header: "Staff Name",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <p>{dayjs(row.original.date).format("MMM DD YYYY")}</p>
      ),
    },

    {
      accessorKey: "price",
      header: "Price",
      cell: (info) => <p>${info.getValue() as string}</p>,
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex gap-[24px] items-center">
            <Eye
              className="cursor-pointer"
              size={24}
              color="#201A18"
              // onClick={() => {
              // push(`/order/${row.original.id}`);
              // }}
            />
          </div>
        );
      },
    },
  ];

  const { table } = useCustomTable({
    tableData: transactionData,
    columns: column,
  });
  return <Table table={table} />;
}
