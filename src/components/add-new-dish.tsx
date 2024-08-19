import { Switch, TextInput } from "@mantine/core";
import React from "react";

export default function AddNewDish() {
  return (
    <div className="bg-white flex flex-col p-[20px] rounded-[20px] w-fit h-fit gap-[20px]">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-[700] leading-[30px]">Add New Dish</p>
        <hr />
      </div>
      <TextInput
        placeholder="Dish name"
        label="Enter dish name"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0 ",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
      />
      <TextInput
        placeholder="Enter price per serving"
        label="Price"
        classNames={{
          root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-fit",
          input: "!border-0 !p-0",
          label: " !text-[11px] 1leading-[16.5px] !text-[#A7A19E] !font-[400]",
        }}
      />
      <Switch
        label="Status"
        h={31}
        w={51}
        color="#34C759"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column-reverse",
            gap: "5px",
          },
          label: {
            padding: "0",
            textAlign: "left",
            fontSize: "11px",
            lineHeight: "16.5px",
            color: "#A7A19E",
          },
          track: {
            cursor: "pointer",
          },
        }}
      />
      <div className="flex gap-[11px] pt-[10px]">
        <button className="px-[66px] py-[13px] bg-[#A7A19E1A] rounded-[10px] ">
          Cancel
        </button>
        <button className="px-[66px] py-[13px] bg-red-600 rounded-[10px] text-white">
          Add
        </button>
      </div>
    </div>
  );
}
