import React, { ReactNode } from 'react';

export default function Button({ classnames, 
  onClick,
  text,disabled
}: {
  classnames: string;
  onClick?: () => void; 
  text: ReactNode; disabled?: boolean
}) {
  return (
    <button disabled={disabled}
      className={` ${classnames} px-[66px] py-[13px] rounded-[10px]`}
     
      onClick={onClick} 
    >
      {text}
    </button>
  );
}
