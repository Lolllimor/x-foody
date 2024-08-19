"use client";
import { ModalContext, IModalContext } from "@/providers/modal-provider";
import { Button, TextInput } from "@mantine/core";
import { Add, SearchNormal1, Setting4 } from "iconsax-react";
import React, { useContext } from "react";
import AddNewDish from "./add-new-dish";
import AddNewStaff from "./add-new-staff";

export default function StaffHeader({ btnLabel }: { btnLabel: string }) {
  const { setModalState } = useContext(ModalContext) as IModalContext;

  return (
    <div className="flex justify-between w-full">
      <TextInput
        styles={{
          wrapper: {
            display: "flex",
            height: "50px",
            border: "1px solid #DAD9DA",
            backgroundColor: "#fff",
            borderRadius: "10px",
            alignItems: "center",
            paddingInline: "16px",
            gap: "10px",
            width: "fit-content",
          },
          input: {
            borderRadius: "8px",
            border: "none",
          },
        }}
        leftSection={<SearchNormal1 size={24} color="#ABAEB5" />}
        placeholder="Search"
      />
      <div className="flex gap-[20px] items-center">
        <button
          onClick={() => {
            setModalState({
              component: <AddNewStaff />,
              opened: true,
            });
          }}
          className="flex gap-[10px] px-[10px] py-[13px] rounded-[10px] bg-red-600 items-center"
        >
          <Add size={24} color="#fff" />
          <p className="text-white text-[16px] leading-[24px]">
           {btnLabel}
          </p>
        </button>
      </div>
    </div>
  );
}
