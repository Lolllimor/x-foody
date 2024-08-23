import { Box, DollarCircle, Profile2User } from "iconsax-react";
import React from "react";
import { BiDish } from "react-icons/bi";

export default function DashCards() {
  const details = [
    {
      icon: <DollarCircle size={24} color="#E1261C" />,
      title: "Revenue",
      amount: "$120,800",
    },
    {
      icon: <Box size={24} color="#E1261C" />,
      title: "Orders",
      amount: "18,000",
    },
    {
      icon: <BiDish size={24} color="#E1261C" />,
      title: "Menu",
      amount: "150",
    },
    {
      icon: <Profile2User size={24} color="#E1261C" />,
      title: "Staff",
      amount: "120",
    },
  ];

  return (
    <div className="flex gap-[20px] w-full flex-wrap">
      {details.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl w-[260px] px-[20px] py-[22px] gap-3 flex shadow-sm h-fit  "
        >
          <div className="w-[60px] h-[60px] rounded-lg bg-[#FEF3F2] flex items-center justify-center">
            {item.icon}
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="text-[16px] leading-[24px]">
              {" "}
              Total {" " + item.title}
            </p>
            <p className="text-[24px] font-[700] leading-[36px]">
              {item.amount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
