import React, { useMemo } from 'react';

function Button({ label, bgColor, url,hvrColor ,bdrColor }) {
  const buttonClassName = useMemo(() => `bg-${bgColor} bg-primary hover:bg-${hvrColor} border border-${bdrColor} sm:px-14 select-none text-nowrap sm:py-5 text-white sm:text-2xl sm:w-[15vmax] w-[20vmax] text-xl p-2 flex items-center justify-center font-medium rounded-full`, [bgColor,hvrColor]);

  return (
    <a href={url} className={buttonClassName}>
      {label}
    </a>
  );
}

export default Button;
