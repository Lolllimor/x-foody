import { TextInput, Button } from "@mantine/core";
import { SearchNormal1, Setting4 } from "iconsax-react";
import React, { ReactNode } from "react";
import Filter from "./filter";

export default function TabHeader({ extraButton }: { extraButton?: ReactNode }) {
  return (
    <div className="flex justify-between w-full">
      <TextInput
        styles={{
          wrapper: {
            display: "flex",
            border: "1px solid #DAD9DA",
            backgroundColor: "#fff",
            borderRadius: "10px",
            alignItems: "center",
            paddingInline: "16px",
            gap: "10px",
            width: "fit-content",
          },
          input: {
            height: "50px",
            borderRadius: "8px",
            border: "none",
          },
        }}
        leftSection={<SearchNormal1 size={24} color="#ABAEB5" />}
        placeholder="Search"
      />
      <div className="flex gap-[20px] items-center">
        {extraButton}
        <Button
          styles={{
            root: {
              paddingInline: "15px",
              height: "50px",
              paddingBlock: "8px",
              border: "1px solid #A7A19E55",
              borderRadius: "10px",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
            label: {
              display: "flex",
              gap: "10px",
            },
          }}
          className={`hover:bg-transparent bg-transparent flex px-[15px] py-[8px] gap-[5px]`}
        >
          <p className="text-[16px] leading-[24px] text-[#201A18]">Filter</p>
          <Setting4 size={24} color="#201A18" />
        </Button>
      </div>
    </div>
  );
}
