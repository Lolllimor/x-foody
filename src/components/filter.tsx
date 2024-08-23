import { Button } from "@mantine/core";
import { Setting4 } from "iconsax-react";
import React from "react";

export default function Filter() {
  return (
    // <button className="py-2.5 px-[15px] items-center bg-blue600 rounded-[8px] border border-[#A7A19E55] flex gap-[7px]">
    //   <p className="text-[12px] leading-[18px] text-[#201A18] font-[500]">Filter</p>
    //   <Setting4 size={15} color="#201A18" />
    // </button>
    <Button
      disabled
      styles={{
        root: {
          paddingInline: "15px",
          height: "39.33px",
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
      className={`hover:bg-transparent bg-transparent flex px-[15px] py-[5px] gap-[5px] `}
    >
      <p className="text-[12px] leading-[18px] text-[#201A18] ">Filter</p>
      <Setting4 size={18} color="#201A18" />
    </Button>
  );
}
