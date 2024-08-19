"use client";

import { useCustomTable } from "@/utilis/hooks/custom-table-data";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Eye, Trash } from "iconsax-react";
import React, { useContext, useState } from "react";
import { food } from "./data/food-data";
import Table from "./table";
import { Switch } from "@mantine/core";
import { ModalContext, IModalContext } from "@/providers/modal-provider";
import Delete from "./common/delete";
import DeleteDish from "./common/delete-dish";

export default function FoodTable() {
  const [foodData, setFoodData] = useState(food);
  const { setModalState } = useContext(ModalContext) as IModalContext;
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "Sr No.",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },
    {
      accessorKey: "name",
      header: "Dish Name",
      cell: (info) => <p>{info.getValue() as string}</p>,
    },

    {
      accessorKey: "price",
      header: "Price",
      cell: (info) => <p>${info.getValue() as string}</p>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <div className="w-fit h-fit ">
            <Switch
              styles={{
                track: {
                  cursor: "pointer",
                },
              }}
              onChange={() => {
                setFoodData((prevFoodData) =>
                  prevFoodData.map((item) =>
                    item.id === row.original.id
                      ? {
                          ...item,
                          status:
                            item.status === "Available"
                              ? "Unavailable"
                              : "Available",
                        }
                      : item
                  )
                );
              }}
              h={31}
              w={51}
              color="#34C759"
              checked={row.original.status === "Available"}
            />
          </div>
        );
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
              onClick={() => {}}
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
                  component: <DeleteDish />,
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
    tableData: foodData,
    columns: column,
  });
  return (
    <div>
      <Table table={table} />
    </div>
  );
}
