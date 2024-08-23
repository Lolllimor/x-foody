import { TextInput, PasswordInput, Checkbox } from '@mantine/core';
import React from 'react'
import LoginBtn from './login-btn';
import Image from 'next/image';

export default function Login() {
  return (
    <section className="max-w-[1440px] w-full p-[30px] gap-[50px] flex flex-1 overflow-auto">
      <div className="w-[50%] h-[100%] bg-cover bg-no-repeat rounded-[30px] bg-[url('/images/login.jpg')] bg-right"></div>
      <div className="flex flex-col items-start gap-[12%] flex-1 overflow-auto justify-center">
        <div className="flex gap-2 items-center w-[445px] justify-center">
          <Image src="/images/logo.svg" height={48} width={50} alt="" />
          <p className=" text-[20px] logo leading-5">X-Foody</p>
        </div>
        <div className="flex flex-col gap-[30px]  overflow-auto">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col w-[445px] gap-[30px]">
              <div className="flex flex-col gap-[5px]">
                <p className="text-[#201A18] text-[30px] font-[800] leading-[45px] family">
                  Welcome👋
                </p>
                <p className="text-[#A7A19E] font-normal text-normal family">
                  Please login here
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <TextInput
                  placeholder="Enter email address"
                  label="Email Address"
                  styles={{
                    input: {
                      "&::placeholder": {
                        color: "#000",
                      },
                    },
                  }}
                  classNames={{
                    root: "border border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-[56px] gap-[2px]",
                    input:
                      "!border-0 !p-0 custom-placeholder !min-h-[20px] !h-[20px] !m-0 ",
                    label:
                      " !text-[11px] leading-[16.5px] !text-[#E1261C] !font-[400]",
                  }}
                />
                <PasswordInput
                  placeholder="Password"
                  label="Enter password"
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
                      "!border-0 !p-0 custom-placeholder !min-h-[20px] !h-[20px] !m-0 ",
                    label:
                      " !text-[11px] leading-[16.5px] !text-[#E1261C] !font-[400]",
                    innerInput: "!p-0 !h-[20px] flex",
                    section: "!h-[20px]",
                  }}
                />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-[10px] items-center">
                <Checkbox color="#E1261C" />
                <p className="leading-6 text-[#201A18] family">Remember Me</p>
              </div>
              <p className="leading-[21px] text-[#E1261C] family text-[14px]">
                Forgot Password?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            {" "}
            <button
              disabled
              className="px-[66px] py-[13px] btn-diasbled bg-red-600 rounded-[10px] text-white w-full"
            >
              Login
            </button>
            <div className="w-full justify-center items-center gap-[8px] flex">
              <hr className="w-full" />
              <p className="text-[14px] font-[600] text-[#201A18AD]">or</p>
              <hr className="w-full" />
            </div>
            <LoginBtn />
          
          </div>
        </div>
      </div>
    </section>
  );
}
