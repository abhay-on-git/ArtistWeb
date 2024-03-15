import React from 'react';

function Button({ label, bgColor, url }) {
  return (
    <a href={url} style={{backgroundColor:bgColor}} className='sm:px-14 text-nowrap sm:py-6 text-white sm:text-2xl sm:w-1/4 w-1/2 text-xl p-2 flex items-center justify-center font-medium rounded-full'>
      {label}
    </a>
  );
}

export default Button;
