"use client";

import { IModalContext, ModalContext } from "@/providers/modal-provider";
import { Select, Switch, TextInput } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React, { useContext } from "react";
import Button from "./common/button";

export default function AddNewStaff() {
  const { close } = useContext(ModalContext) as IModalContext;
  return (
    <div className="bg-white flex flex-col p-[20px] rounded-[20px] w-fit h-fit gap-[20px]">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-[700] leading-[30px]">Add New Member</p>
        <hr />
      </div>
      <TextInput
        placeholder=" John Doe"
        label="Enter Name"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0 ",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
      />
      <TextInput
        placeholder="(303) 555-0105"
        label="Contact Number"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
      />
      <TextInput
        placeholder="email"
        label="Email Address"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
      />
      <Select
        defaultValue={"active"}
        rightSection={<ArrowDown2 size={24} color="#201A18" />}
        label="Select status"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
        data={[
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
        ]}
      />
      <div className="flex gap-[11px] pt-[10px]">
         <Button classnames="bg-[#A7A19E1A]"  onClick={() => close()} text="Cancel" />
        <Button classnames="bg-[#dc2626] text-[#fff]" text="Add" />
        
      </div>
    </div>
  );
}
