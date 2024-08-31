import { Avatar, TextInput } from '@mantine/core';
import React from 'react';
import { NotificationBing, SearchNormal1 } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { cookieStorage } from '@ibnlanre/portal';

export default function Header() {
  const { push } = useRouter();
  const info = cookieStorage.getItem('userData');
  if (!info) return;
  const parsedInfo = JSON.parse(info);
  console.log(parsedInfo);
  return (
    <div className=" py-[21px] px-[30px] bg-white justify-between flex items-center">
      <div>
        <TextInput disabled
          styles={{
            wrapper: {
              display: 'flex',
              border: '1px solid #DAD9DA',
              backgroundColor: '#fff',
              borderRadius: '10px',
              alignItems: 'center',
              paddingInline: '16px',
              gap: '10px',
              width: 'fit-content',
            },
            input: {
              border: '0px',
            },
          }}
          leftSection={<SearchNormal1 size={24} color="#ABAEB5" />}
          placeholder="Search"
        />
      </div>

      <div className="flex gap-[55px] items-center h-[50px] ">
        <div
          className="flex gap-[10px] border-[1px] cursor-pointer border-[#A7A19E55] rounded-[10px] items-center p-[7px] w-[184px]"
          onClick={() => {
            push('/profile');
          }}
        >
          <div className="flex items-center  justify-center p-[2px] border border-[#A7A19E55] rounded-[10px]">
            <Avatar
              src={parsedInfo.picture}
              styles={{
                root: {
                  borderRadius: '10px',
                },
              }}
              color="#A7A19E1A"
              className=" h-[36px] w-[36px] rounded-[8px] "
            />
          </div>

          <p>{parsedInfo.name}</p>
        </div>
        <div className="flex items-center justify-center bg-[#A7A19E1A] rounded-[10px] h-[50px] w-[50px]">
          <NotificationBing size={24} />
        </div>
      </div>
    </div>
  );
}
