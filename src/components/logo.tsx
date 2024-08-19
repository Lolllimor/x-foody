import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image src="/images/logo.svg" height={48} width={50} alt="" />
      <p className=" text-[20px] logo leading-5">X-Foody</p>
    </div>
  );
}
