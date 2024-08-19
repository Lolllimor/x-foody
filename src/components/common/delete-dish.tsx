import { Trash } from 'iconsax-react';
import React from 'react'

export default function DeleteDish() {
  return (
    <div className="bg-neutral50 flex justify-center items-center flex-col w-fit h-fit p-[20px] gap-[30px]">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="flex justify-center items-center flex-col ">
          <div className="bg-[#F45B691A] rounded-full h-[100px] w-[100px] flex items-center justify-center">
            <div className="bg-[#F45B690D] rounded-full h-[75px] w-[75px] flex items-center justify-center">
              <Trash size="30" color="#F45B69" />
            </div>
          </div>
        </div>
        <div className="gap-[10px] flex flex-col justify-center items-center">
          <p className="text-center pt-[8px] text-[20px] font-[700] leading-[30px] w-[215px] ">
            Are you sure want to delete this dish?
          </p>
          <p className="text-[14px] font-normal leading-[21px]">
            This item will be deleted parmanently
          </p>
        </div>
      </div>
      <div className="flex gap-[11px] w-full">
        <button
          className="px-[54px] py-[13px] bg-[#A7A19E1A] rounded-[10px]"
          onClick={() => {
            close();
          }}
        >
          <p>Cancel</p>
        </button>
        <button className="px-[54px] py-[13px] bg-[#F45B69] text-white rounded-[10px]">
          <p>Yes, Delete</p>
        </button>
      </div>
    </div>
  );
}
