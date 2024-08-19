"use client";

import React, { ReactNode } from "react";
import Aside from "./aside";
import Header from "./header";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";

export default function AppLayout({
  children,
  pageTitle,
  arrayCrumb,
  previous,
}: {
  children: ReactNode;
  pageTitle?: string;
  arrayCrumb?: string[];
  previous?: string;
}) {
  const { back } = useRouter();
  return (
    <main className="h-screen bg-[#A7A19E0D] flex">
      <Aside />
      <div className="flex flex-1 flex-col">
        <Header />
        <section className="flex flex-1 p-[30px] flex-col gap-[10px] overflow-auto">
          <p className="text-[24px] font-[700] leading-[36px] text-[#201A18]">
            {pageTitle}
          </p>
          {arrayCrumb ? (
            <div className="flex gap-[5px] items-center cursor-pointer pb-[10px]">
              <p
                className="text-[14px] leading-[21px] text-[#201A18]"
                onClick={() => {
                  back();
                }}
              >
                {arrayCrumb && arrayCrumb[0]}
              </p>
              <ArrowRight2 size={20} color="#201A18" />
              <p className="text-[14px] leading-[21px] text-[#201A18] ">
                {arrayCrumb && arrayCrumb[1]}
              </p>
            </div>
          ) : null}
          <div className="flex flex-col gap-[20px] bg-white p-[20px] rounded-2xl">
           
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
