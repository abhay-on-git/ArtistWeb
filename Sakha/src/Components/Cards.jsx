import React from 'react';
import Button from './Button';
import SmallBtn from './SmallBtn';

function Cards({imgUrl,btnlabel,discription}) {
  return (
    <a href='#' className='relative flex flex-col justify-between sm:w-[45vmax] sm:h-[35vmax] w-[90vmax] h-[80%] hover:border-4 border-primary sm:rounded-3xl rounded-2xl p-3 bg-red-500' style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/recore-pilates-london-web-design-agency-2024-1400x1641.jpeg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>
      <div className=''><SmallBtn label={"Latest"} bgColor={"primary"} width={"8vmax"} /></div>
      <div className='w-full flex flex-col sm:gap-4 gap-2 '>
        <h1 className='sm:text-4xl text-xl font-medium text-white'>Re-Core Pilates</h1>
        <div className='w-full py-2 flex items-center justify-centerrelative  gap-3 '>
          <SmallBtn label={"UI/UX Design"} bgColor={"transparent"} bdrColor={"#fff"} />
          <SmallBtn label={"Development"} bgColor={"transparent"} />
        </div>
      </div>
    </a>
  );
}

export default Cards;
