'use client'
import React, { useMemo } from 'react';

function Button({ label, bgColor, url , hvrColor , bdrColor="#000" ,color }) {
  const buttonClassName = useMemo(() => `bg-${bgColor} bg-primary cursor-pointer hover:bg-${hvrColor} border border-${bdrColor} text-${color} sm:px-14 select-none text-nowrap sm:py-5 sm:text-2xl sm:w-[15vmax] w-[20vmax] text-xl p-2 flex items-center justify-center font-medium rounded-full`, [bgColor,hvrColor]);

  return (
    <a href={url} className={buttonClassName}>
      {label}
    </a>
  );
}

export default Button;
