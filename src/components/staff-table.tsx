"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Edit2, Trash } from "iconsax-react";
import React, { useContext } from "react";
import { useCustomTable } from "@/utilis/hooks/custom-table-data";
import Table from "./table";
import { staffData } from "./data/staff-data";
import AddNewStaff from "./add-new-staff";
import { IModalContext, ModalContext } from "@/providers/modal-provider";
import { useRouter } from "next/navigation";

export default function StaffTable() {
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const { push } = useRouter();
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "staffID",
      header: "Staff ID.",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },
    {
      accessorKey: "name",
      header: "Member Name",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },

    {
      accessorKey: "contact",
      header: "Contact Number",
      cell: (info) => (
        <p className="text-[16px] text-[#201A18] font-normal">
          {info.getValue() as string}
        </p>
      ),
    },
    {
      accessorKey: "email",
      header: "Email Address",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        if (row.original.status === "active") {
          return (
            <div
              className={`bg-[#EDFCF4] text-[#0C8F5C]  py-[3px] rounded h-[24px] w-[64px] flex justify-center items-center`}
            >
              <p className="text-[12px] leaading-[18px] font-normal">Active</p>
            </div>
          );
        } else {
          return (
            <div
              className={`bg-[#F45B691A] text-[#F45B69]  py-[3px] rounded h-[24px] w-[64px] flex justify-center items-center`}
            >
              <p className="text-[12px] leaading-[18px] font-normal">
                Unactive
              </p>
            </div>
          );
        }
      },
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        return (
          <div className="flex gap-[10px] items-center">
            <Eye
              className="cursor-pointer"
              size={24}
              color="#201A18"
              onClick={() => {
                push(`/staff/${row.original.staffID}`);
              }}
            />
            <Edit2
              className="cursor-pointer"
              size={24}
              color="#201A18"
              onClick={() => {}}
            />
            <Trash
              onClick={() => {
                setModalState({
                  component: <AddNewStaff />,
                  opened: true,
                });
              }}
              className="cursor-pointer"
              size={24}
              color="#201A18"
            />
          </div>
        );
      },
    },
  ];
  const { table } = useCustomTable({
    tableData: staffData,
    columns: column,
  });
  return (
    <div>
      <Table table={table} />
    </div>
  );
}
