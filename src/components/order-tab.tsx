"use client";

import { useCustomTable } from "@/utils/hooks/custom-table-data";
import { Tabs } from "@mantine/core";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "iconsax-react";
import React, { useContext, useState } from "react";
import { unAccepted } from "./data/orders-data";
import Table from "./table";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IModalContext, ModalContext } from "@/providers/modal-provider";
import tabStyles from "./tabs.module.css";
import { useRouter } from "next/navigation";
import Delete from "./common/delete";
dayjs.extend(customParseFormat);

const TrashContent = ({ id }: { id: number }) => {
  const { setModalState } = useContext(ModalContext) as IModalContext;

  return (
    <div
      onClick={() => {
        setModalState({
          component: <Delete id={id} />,
          opened: true,
        });
      }}
    >
      <Trash className="cursor-pointer" size={24} color="#C94849" />
    </div>
  );
};

export default function OrderTab() {
  const [active, setActive] = useState<string>("unaccepted");
  const { push } = useRouter();
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "Order ID",
      cell: (info) => <p>#{info.getValue() as string}</p>,
    },
    {
      accessorKey: "name",
      header: "Customer Name",
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
      accessorKey: "time",
      header: "Time",
      cell: ({ row }) => {
        return (
          <p>{dayjs(row.original.time as string, "HH:mm").format("hh:mm A")}</p>
        );
      },
    },
    {
      accessorKey: "amount",
      header: "Price",
      cell: (info) => <p>${info.getValue() as string}</p>,
    },
    {
      accessorKey: "payment_type",
      header: "Payment Type",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        if (row.original.status === "Unaccepted") {
          return (
            <div className="flex gap-[10px]">
              <button className="bg-[#F45B69] px-[13px] py-[8px] rounded-lg text-white">
                Reject
              </button>
              <button className="bg-[#3FC28A] px-[13px] py-[8px] rounded-lg text-white">
                Accept
              </button>
            </div>
          );
        } else
          return (
            <div
              className={`${
                row.original.status === "Pending"
                  ? "bg-[#FFF8EF] text-[#E1891C]"
                  : "bg-[#EDFCF4] text-[#0C8F5C]"
              } px-2 py-[3px] rounded h-[24px] w-fit flex justify-center items-center`}
            >
              <p className="text-[12px] leaading-[18px] font-normal">
                {row.original.status}
              </p>
            </div>
          );
      },
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
              onClick={() => {
                push(`/order/${row.original.id}`);
              }}
            />
            {row.original.status !== "Unaccepted" && (
              <TrashContent id={row.original.id} />
            )}
          </div>
        );
      },
    },
  ];
  const { table } = useCustomTable({
    tableData:
      active === "unaccepted"
        ? unAccepted.filter((item) => item.status === "Unaccepted")
        : active === "pending"
        ? unAccepted.filter((item) => item.status === "Pending")
        : unAccepted.filter((item) => item.status === "Completed"),
    columns: column,
  });
  return (
    <Tabs
      classNames={tabStyles}
      defaultValue={active}
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        },
        tab: {
          "&[data-active]": {
            padding: 0,
            border: "0px",
            borderColor: "transparent",
          },
        },
      }}
    >
      <Tabs.List>
        <div className="flex bg-[#A7A19E0D] rounded-[10px] h-fit w-fit">
          <Tabs.Tab value="unaccepted">
            <div
              onClick={() => {
                setActive("unaccepted");
              }}
              className={`${
                active === "unaccepted" && " bg-[#E1261C] rounded-[10px]"
              } py-[13px] px-[22px] `}
            >
              <p
                className={`${
                  active === "unaccepted" && "text-white"
                } text-[16px] font-normal leading-6  text-[#201A18]`}
              >
                New Orders
              </p>
            </div>
          </Tabs.Tab>
          <Tabs.Tab value="pending">
            <div
              onClick={() => {
                setActive("pending");
              }}
              className={`${
                active === "pending" && " bg-[#E1261C] rounded-[10px]"
              } py-[13px] px-[22px] `}
            >
              <p
                className={`${
                  active === "pending" && "text-white"
                } text-[16px] font-normal leading-6 text-[#201A18]`}
              >
                In Process
              </p>
            </div>
          </Tabs.Tab>
          <Tabs.Tab value="completed">
            <div
              onClick={() => {
                setActive("completed");
              }}
              className={`${
                active === "completed" && " bg-[#E1261C] rounded-[10px]"
              } py-[13px] px-[22px] `}
            >
              <p
                className={`${
                  active === "completed" && "text-white"
                } text-[16px] font-normal leading-6 text-[#201A18]`}
              >
                Completed
              </p>
            </div>
          </Tabs.Tab>
        </div>
      </Tabs.List>
      <Tabs.Panel value="unaccepted">
        <Table table={table} />
      </Tabs.Panel>
      <Tabs.Panel value="pending">
        <Table table={table} />
      </Tabs.Panel>
      <Tabs.Panel value="completed">
        <Table table={table} />
      </Tabs.Panel>
    </Tabs>
  );
}
