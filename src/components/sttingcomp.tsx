import { Select, Switch } from '@mantine/core';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react'

export default function SettingComp() {
  return (
    <div className="flex flex-col overflow-auto flex-1">
      <div className="flex w-full pb-[20px] border-b border-[#A7A19E1A] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Appearance
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Customize how your theme looks on your device
          </p>
        </div>
        <Select
          classNames={{
            input:
              "!w-[84px] !bg-[#A7A19E1A] !border-0 !rounded-[10px] !flex  ",
          }}
          defaultValue="light"
          rightSection={<ArrowDown2 size={20} color="#201A18" />}
          data={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
      </div>
      <div className="flex w-full py-[20px] border-b border-[#A7A19E1A] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Language
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Select your language
          </p>
        </div>
        <Select
          classNames={{
            input:
              "!w-[84px] !bg-[#A7A19E1A] !border-0 !rounded-[10px] !flex  ",
          }}
          defaultValue="english"
          rightSection={<ArrowDown2 size={20} color="#201A18" />}
          data={[
            { value: "english", label: "Eng" },
            { value: "arabic", label: "Ara" },
          ]}
        />
      </div>
      <div className="flex w-full py-[20px] border-b border-[#A7A19E1A] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Two-factor Authentication
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Keep your account secure by enabling 2FA via mail
          </p>
        </div>
        <Switch
          h={31}
          w={51}
          color="#34C759"
          styles={{
            body: {
              display: "flex",
              flexDirection: "column-reverse",
              gap: "5px",
            },

            track: {
              cursor: "pointer",
            },
          }}
        />
      </div>
      <div className="flex w-full py-[20px] border-b border-[#A7A19E1A] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Mobile Push Notifications
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Receive push notification
          </p>
        </div>
        <Switch
          h={31}
          w={51}
          color="#34C759"
          styles={{
            body: {
              display: "flex",
              flexDirection: "column-reverse",
              gap: "5px",
            },

            track: {
              cursor: "pointer",
            },
          }}
        />
      </div>
      <div className="flex w-full py-[20px] border-b border-[#A7A19E1A] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Desktop Notification
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Receive push notification in desktop
          </p>
        </div>
        <Switch
          h={31}
          w={51}
          color="#34C759"
          styles={{
            body: {
              display: "flex",
              flexDirection: "column-reverse",
              gap: "5px",
            },

            track: {
              cursor: "pointer",
            },
          }}
        />
      </div>
      <div className="flex w-full pt-[20px] justify-between items-center ">
        <div className="flex flex-col gap-[5px]">
          <p className="text-[16px] text-[#201A18] font-[700] leading-[24px]">
            Email Notifications
          </p>
          <p className="text-[16px] text-[#A7A19E] font-normal">
            Receive email notification
          </p>
        </div>
        <Switch
          defaultChecked
          h={31}
          w={51}
          color="#34C759"
          styles={{
            body: {
              display: "flex",
              flexDirection: "column-reverse",
              gap: "5px",
            },

            track: {
              cursor: "pointer",
            },
          }}
        />
      </div>
    </div>
  );
}
