"use client";

import { cookieStorage } from "@ibnlanre/portal";
import { Avatar, Button, PasswordInput } from "@mantine/core";
import { Edit } from "iconsax-react";
import React from "react";

export default function ProfileInfo() {
  const info = cookieStorage.getItem("userData");
  if (!info) return;
  const parsedInfo = JSON.parse(info);
  return (
    <main className="flex flex-col flex-1 h-full">
      <section className="flex flex-col gap-[16px] border-b border-[#A7A19E1A] pb-[10px] ">
        <Avatar
          src={parsedInfo.picture}
          styles={{
            root: {
              borderRadius: "8px",
            },
          }}
          color="#A7A19E1A"
          className=" !h-[80px] !w-[80px] rounded-[8px] "
        />
        <div className="flex justify-between items-center">
          {" "}
          <div className="flex flex-col">
            <p className="font-[700] leading-[24px] text-[#201A18] text-[16px]">
              {parsedInfo.name}
            </p>
            <p className="font-normal leading-[24px] text-[#A7A19E] text-[16px]">
              {parsedInfo.email}
            </p>
          </div>
          <Button
            classNames={{
              label: "!flex !gap-[10px] ",
            }}
            disabled
            className="!py-[13px] !bg-[#E1261C]!px-[23px] !h-[50px]  !rounded-[10px] disabled:bg-[#E1261CA6]"
          >
            <Edit size={24} color="#fff" />
            <p className="text-[16px] font-normal leading-6 text-white">
              Edit Profile
            </p>
          </Button>
        </div>
      </section>
      <div className="flex flex-col gap-[20px] pt-[20px]">
        <div className="flex gap-[20px] w-full">
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">Name</p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {parsedInfo.name}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Email Address
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">
              {parsedInfo.email}
            </p>
          </div>
          <div className=" border-b border-[#A7A19E1A] pb-[10px] w-full flex flex-col gap-[5px]">
            <p className="text-[14px] leading-[21px] text-[#A7A19E]">
              Contact Number
            </p>
            <p className="text-[14px] leading-[21px] text-[#201A18]">--</p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] w-full">
          <div className=" pb-[10px] w-full flex flex-col gap-[20px]">
            <p className="text-[18px] leading-[27px] font-[700] text-[#201A18]">
              Change Password
            </p>
            <div className="grid-cols-3 gap-[20px] w-full grid">
              <PasswordInput
                disabled
                defaultValue={12345678}
                placeholder="Password"
                label="New Password"
                styles={{
                  input: {
                    "::placeholder": {
                      color: "#000",
                    },
                    "&:data-disabled": {
                      backgroundColor: "white",
                    },
                  },
                }}
                classNames={{
                  root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-[56px] gap-[2px]",
                  input:
                    "!border-0 !p-0  profile-placeholder !min-h-[20px] !h-[20px] !m-0 ",
                  label:
                    " !text-[11px] leading-[16.5px] !text-[#A7A19E] !font-[400]",
                  innerInput: "!p-0 !h-[20px] flex",
                  section: "!h-[20px]",
                }}
              />
              <PasswordInput
                disabled
                defaultValue={12345678}
                placeholder="Password"
                label="Re-Enter Password"
                styles={{
                  input: {
                    "&:data-disabled": {
                      backgroundColor: "white",
                    },
                  },
                }}
                classNames={{
                  root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-[56px] gap-[2px]",
                  input:
                    "!border-0 !p-0  profile-placeholder !min-h-[20px] !h-[20px] !m-0 ",
                  label:
                    " !text-[11px] leading-[16.5px] !text-[#A7A19E] !font-[400]",
                  innerInput: "!p-0 !h-[20px] flex",
                  section: "!h-[20px]",
                }}
              />
            </div>
            <Button
              classNames={{
                label: "!flex !gap-[10px] ",
                root:"!w-fit"

              }}
              disabled
              className="!py-[13px] !bg-[#E1261C]!px-[23px] !h-[50px] !w-fit  !rounded-[10px] disabled:bg-[#E1261CA6]"
            >
              <p className="text-[16px] font-normal leading-6 text-white">
                Update Password
              </p>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full"></div>
      </div>
    </main>
  );
}
