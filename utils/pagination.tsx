import { Pagination, Select } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import React from "react";
import paginationStyle from "../src/components/common/modules/pagination.module.css";

export default function TablePagination() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-[20px]">
        <p className="text-[14px] font-[400] leading-[21px] text-[#A7A19E]">
          Showing
        </p>
        <Select
          defaultValue={"10"}
          rightSection={<ArrowDown2 size={20} color="#201A18" />}
          styles={{
            input: {
              width: "73px",
              height: "46px",
              borderRadius: "10px",
            },
          }}
          data={["10", "20", "50", "100"]}
        />
      </div>
      <p className="text-[14px] font-[400] leading-[21px] text-[#A7A19E]">
        Showing 1 to 10 out of 60 records
      </p>
      <Pagination
        total={1}
        classNames={paginationStyle}
        styles={{
          control: {
            height: "35px",
            width: "35px",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "21px",
          },
        }}
      />
    </div>
  );
}
