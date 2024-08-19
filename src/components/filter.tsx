import { Button } from "@mantine/core";
import { Setting4 } from "iconsax-react";
import React from "react";

export default function Filter() {
  return (
    <Button
      styles={{
        root: {
          paddingInline: "15px",
          height:"50px",
          paddingBlock: "8px",
          border: "1px solid #A7A19E55",
          borderRadius: "8px",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        label: {
          display: "flex",
          gap: "5px",
        },
      }}
      className={`hover:bg-transparent bg-transparent flex px-[15px] py-[8px] gap-[5px]`}
    >
      <p className="text-[12px] leading-[18px] text-[#201A18]">Filter</p>
      <Setting4 size={18} color="#201A18" />
    </Button>
  );
}
