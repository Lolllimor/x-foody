"use client";

import React, { useContext } from "react"; // Ensure React and useContext are correctly imported
import TabHeader from "./tab-header";
import { Add } from "iconsax-react";
import { IModalContext, ModalContext } from "@/providers/modal-provider";
import AddNewDish from "./add-new-dish";

export default function MenuHeader() {
  const { setModalState } = useContext(ModalContext) as IModalContext;

  return (
    <TabHeader
      extraButton={
        <button
          onClick={() => {
            console.log("hiii")
            setModalState({
              component: <AddNewDish />,
              opened: true,
            });
          }}
          className="flex gap-[10px] px-[10px] py-[13px] rounded-[10px] bg-red-600 items-center"
        >
          <Add size={24} color="#fff" />
          <p className="text-white text-[16px] leading-[24px]">Add New Dish</p>
        </button>
      }
    />
  );
}
