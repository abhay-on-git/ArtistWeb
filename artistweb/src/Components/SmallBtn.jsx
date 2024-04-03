import React, { useMemo } from 'react';

function SmallBtn({ label, bgColor, url,hvrColor ,bdrColor="#000",width }) {
  const buttonClassName = useMemo(() => `bg-${bgColor} hover:bg-${hvrColor} backdrop-blur-sm border border-${bdrColor} sm:px-2 select-none text-nowrap sm:py-1 text-white sm:text-lg sm:w-[12vmax] text-sm px-2 py-1 flex items-center justify-center font-regular rounded-full`, [bgColor,hvrColor]);
  
  return (
    <a href={url} style={{ width: width }} className={buttonClassName}>
      {label}
    </a>
  );
}

export default SmallBtn;
