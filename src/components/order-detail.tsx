"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import { unAccepted } from "./data/orders-data";
import dayjs from "dayjs";

export default function OrderDetail() {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const Detail = unAccepted.find((item) => item.id === id);
  return (
    <section className="bg-white rounded-2xl flex-1 p-[20px] flex flex-col gap-[20px]">
      <div className="flex gap-[20px]">
        <div className="flex flex-col gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Order ID
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              #{Detail?.id}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Date</p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {dayjs(Detail?.date).format("MMM DD, YYYY.")}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Address</p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.address}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Customer Name
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.name}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Time</p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {dayjs(Detail?.time as string, "HH:mm").format("hh:mm A")}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Order Status
            </p>
            <div
              className={`${
                Detail?.status === "Completed"
                  ? "bg-[#EDFCF4]"
                  : Detail?.status === "Pending"
                  ? "bg-[#FFF8EF]"
                  : "bg-red-50"
              } flex items-center justify-center w-fit rounded-[4px] px-[9px] py-[3px]`}
            >
              <p
                className={`${
                  Detail?.status === "Completed"
                    ? "text-[#0C8F5C]"
                    : Detail?.status === "Pending"
                    ? "text-[#E1891C]"
                    : "text-red-600"
                } text-[14px] leading-[21px]`}
              >
                {Detail?.status === "Unaccepted" ? "Awaiting" : Detail?.status}
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
              {Detail?.contact_number}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Amount</p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              ${Detail?.amount}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Payment Type
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {Detail?.payment_type}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        <p className="text-[#201A18] text-[18px] font-[700] leading-[27px]">
          Item Details
        </p>
        <p className="text-[16px] font-[400]">{Detail?.items}</p>
      </div>
    </section>
  );
}
