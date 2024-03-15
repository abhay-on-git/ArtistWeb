import React, { useState, useEffect } from 'react';
import Button from '../Components/Button';
import { RxHamburgerMenu } from "react-icons/rx";

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases1 = ["20", "300", "15"];
  const phrases2 = ["Years on the Market", "Projects Completed", "Website Awards"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases1.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='px-3 sm:px-16'>
      <div className='w-full flex justify-between items-center sm:py-6 py-2 px-1'>
        <h1 className='sm:text-4xl text-2xl font-semibold'>LOGO</h1>
        <div className='flex gap-4'>
          <button className='bg-transparent border border-zinc-900 rounded-full px-5 py-1 sm:px-8 sm:py-1'>Get in touch</button>
          <button className='border border-zinc-900 p-3 sm:text-lg rounded-full'><RxHamburgerMenu /></button>
        </div>
      </div>
      <div className='sm:mt-[6vmax] mt-14 overflow-hidden'>
        <h1 className='sm:text-[8vmax]  sm:leading-[8vmax] font-medium text-[6vmax] leading-[7vmax]'>Crafting <span className='inline-block text-[#545CFF]'>Digital</span></h1>
        <h1 className='sm:text-[8vmax]  sm:leading-[8vmax] font-medium text-[6vmax] leading-[7vmax]'>Experiences</h1>
      </div>
      <div className='sm:mt-24 sm:py-12 w-full gap-12 flex flex-col items-start px-1 sm:flex-row sm:items-center justify-between pt-12'>
        <div className='sm:w-[25vmax] w-full flex items-center justify-betweens gap-5 h-full'>
          <div className='sm:w-[4.5vmax] sm:h-[4.5vmax] w-[6vmax] h-[6vmax] p-5 bg-black rounded-full'>
            <div style={{ transition: '0.3s', ease:'0.76, 0, 0.24, 1' }} className='sm:text-xl text-lg w-full h-full flex items-center justify-center text-center font-medium text-white'>{phrases1[phraseIndex]}</div>
          </div>
          <h1 style={{ transition: '0.3s', ease:'0.76, 0, 0.24, 1' }} className='text-2xl text-nowrap font-medium flex'>{phrases2[phraseIndex]}</h1>
        </div>
        <div className='gray  flex flex-col sm:flex sm:flex-row sm:items-center  justify-end gap-10 h-full'>
          <p className='sm:w-1/3 sm:text-2xl text-xl w-[90%]'>We build engaging websites, brands & innovative e-commerce solutions.</p>
          <Button label="Case Studies" bgColor="#545CFF" url="#" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
