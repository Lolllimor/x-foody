"use client";
import { useParams } from "next/navigation";
import React from "react";
import { staffData } from "./data/staff-data";

export default function StaffDetail() {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const Detail = staffData.find((item) => item.staffID === id);
  return (
    <section className="bg-white rounded-2xl flex-1 p-[20px] flex flex-col gap-[20px]">
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Staff ID
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              #{Detail?.staffID}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Email Address
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Staff Name
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.name}
            </p>
          </div>

          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Status</p>
            <div
              className={`${
                Detail?.status === "active" ? "bg-[#EDFCF4]" : "bg-red-50"
              } flex items-center justify-center w-fit rounded-[4px] px-[9px] py-[3px]`}
            >
              <p
                className={`${
                  Detail?.status === "active"
                    ? "text-[#0C8F5C]"
                    : "text-red-600"
                } text-[14px] leading-[21px]`}
              >
                {Detail?.status === "active" ? "Active" : "Unactive"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Contact Number
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.contact}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
