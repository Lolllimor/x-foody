"use client";

import {
  Box,
  Category2,
  DollarCircle,
  Logout,
  Note1,
  Profile2User,
  Setting,
} from "iconsax-react";
import React, { useState } from "react";
import { BiDish } from "react-icons/bi";
import Logo from "./logo";
import { usePathname, useRouter } from "next/navigation";
import { AsideAtom } from "@/utils/hooks/querystore";
import { cookieStorage, usePortal } from "@ibnlanre/portal";

export default function Aside() {
  const [active, setActive] = usePortal.atom(AsideAtom);
  const pathName = usePathname();
  const { push } = useRouter();
  const logout = () => {
    cookieStorage.clear();
    localStorage.clear();
    push("/");
  };
  const Menu = [
    {
      img: (
        <Category2
          size="16"
          color={`${pathName.includes("dashboard") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "Dasboard",
      tag: "dashboard",
    },
    {
      img: (
        <Box
          size="16"
          color={`${pathName.includes("order") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "My Orders",
      tag: "order",
    },
    {
      img: (
        <BiDish
          color={`${pathName.includes("menu") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "Menu Items",
      tag: "menu",
    },
    {
      img: (
        <Profile2User
          size="16"
          color={`${pathName.includes("staff") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "My Staff",
      tag: "staff",
    },
    {
      img: (
        <DollarCircle
          size="16"
          color={`${pathName.includes("transaction") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "Transactions",
      tag: "transaction",
    },
    // {
    //   img: (
    //     <Note1
    //       size="16"
    //       color={`${pathName.includes("report") ? "#E1261C" : "#201A18"}`}
    //     />
    //   ),
    //   name: "Reports",
    //   tag: "report",
    // },
    {
      img: (
        <Setting
          size="16"
          color={`${pathName.includes("setting") ? "#E1261C" : "#201A18"}`}
        />
      ),
      name: "Settings",
      tag: "setting",
    },
  ];
  return (
    <section className="p-[30px] flex flex-col justify-between bg-white h-full w-[280px] max-[1024px]:w-[240px] border-r-[#f0f0f0] border-r-[1px]">
      <div className="flex flex-col gap-[40px]">
        <Logo />
        <div className="gap-[10px] flex flex-col">
          {Menu.map((item, idx) => (
            <div
              onClick={() => {
                setActive(item.tag as string);
                push(`/${item.tag}`);
              }}
              className={`${
                pathName.includes(item.tag as string) &&
                "bg-[#FEF3F2] rounded-r-[10px] border-l-[3px] border-l-[#E1261C]"
              } hover:bg-[#FEF3F2] flex gap-4 items-center py-3 pl-4 cursor-pointer  `}
              key={idx}
            >
              {item.img}
              <p
                className={`${
                  pathName.includes(item.tag as string) && "text-[#E1261C] "
                } text-4 font-[400] text-[#201A18]`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex gap-4 items-center py-[12px] pl-4 hover:bg-[#FEF3F2] rounded-r-[10px] cursor-pointer"
        onClick={logout}
      >
        <Logout size="16" color={`#201A18`} />
        <p className="text-4 font-[400] text-[#201A18] ">Logout</p>
      </div>
    </section>
  );
}
