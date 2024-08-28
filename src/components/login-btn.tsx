"use client";

import React from "react"
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import axios from "axios";
import { cookieStorage } from "@ibnlanre/portal";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

export default function LoginBtn() {
  const { push } = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const res = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      cookieStorage.setItem(
        "userData",
        JSON.stringify({
          name: res.data.name,
          email: res.data.email,
          picture: res.data.picture,
        })
      );

      push("/dashboard");
    },
  });
  return (
    <Button loading 
      onClick={() => login()}
      className="px-[66px] gap-[5px] font-[500] flex justify-center border h-[50px] border-[#DAD9DA] items-center rounded-[10px] text-[#2B2930] w-full"
    >
      Continue with{" "}
      <Image
        className="!h-[25px] !w-[80px] mt-[5px]"
        src="/images/g-logo.png"
        alt="google-logo"
        height={25}
        width={80}
      />
    </Button>
  );
}
