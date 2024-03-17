import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Components/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases1 = ["20", "300", "15"];
  const phrases2 = ["Years on the Market", "Projects Completed", "Website Awards"];
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex(prevIndex => (prevIndex + 1) % phrases1.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [setPhraseIndex]);

  const openNavigation = useCallback(()=>{
    setIsNavigationOpen(prev => !prev)
  },[setIsNavigationOpen])
  
  return (
    <div className='relative w-full min-h-screen overflow-hidden px-3 sm:px-16'>
      <motion.div 
      initial={{y:"-100%"}}
      animate={{ y: isNavigationOpen ? "0%" : "-100%" }}
      transition={{duration:0.3,ease:[0.5, 1, 0.89, 1]}}
      className='absolute flex items-center justify-center left-0 overlay z-10 w-full h-full bg-[#a0a0a0a4] backdrop-blur-sm'>
         <div className='sm:w-[60%] sm:h-[85%] w-[90%] h-[75%] flex flex-col rounded-3xl bg-[#000] sm:px-12 sm:py-10 p-4'>
          <div className='relative flex justify-end items-center p-1 w-full sm:h-[3vmax] '>
            <div 
            onClick={openNavigation}
            className='sm:w-[3vmax] sm:h-[3vmax] w-[5vmax] h-[5vmax] flex items-center justify-center sm:text-[2vmax] text-white rounded-full cursor-pointer bg-[#58555565]'><IoClose />
            </div>
          </div>
           {["Case Studies","Our Agency","Contact Us"].map((item,index)=>{
            return <h1 className='text-white sm:text-[5vmax] hover:text-zinc-400 cursor-pointer select-none text-[6vmax]' key={index}>{item}</h1>
           })}
         <div className='relative w-full sm:h-[5vmax] sm:mt-10 mt-2 flex  sm:flex-row sm:items-center flex-col items-start justify-between '>
          <div className='w-[60%] mb-3 flex sm:flex-row sm:items-center flex-col-reverse items-start justify-start p-2 sm:text-[1.2vmax] text-white gap-5 h-full'>
            {["Instagram","Facebook","WhatsApp","MobileNo."].map((item,index)=>{
              return <a href="#" key={index} className={`${index===3 ? " sm:border select-none sm:border-zinc-100 sm:rounded-full sm:px-8 sm:py-1 sm:hover:bg-primary border-b border-transparent hover:border-zinc-100" : "border-b select-none border-transparent hover:border-zinc-100"} `}>{item}</a>
            })}

          </div>
              <Button label={"Emergency"} url={"#"} bgColor={"transparent"} hvrColor={"primary"} bdrColor={"bg-zinc-100"} color={"white"} />
         </div>

         </div>
      </motion.div>
      <div className='w-full flex justify-between items-center sm:py-6 py-2 px-1'>
        <h1 className='sm:text-4xl text-2xl font-semibold'>LOGO</h1>
        <div className='flex gap-4'>
          <button className='bg-transparent border border-zinc-900 rounded-full px-5 py-1 sm:px-8 sm:py-1'>Get in touch</button>
          <button 
          onClick={openNavigation}
          className='border border-zinc-900 p-3 sm:text-lg rounded-full hover:bg-black hover:text-white'><RxHamburgerMenu /></button>
        </div>
      </div>
      <div className='sm:mt-[6vmax] mt-14 overflow-hidden'>
        <motion.h1
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{ease:[0.87, 0, 0.13, 1]  }}
         className='sm:text-[8vmax]  sm:leading-[9vmax] font-medium text-[6vmax] leading-[7vmax]'>Crafting <span className='inline-block text-primary'>Digital</span></motion.h1>
        <h1 className='sm:text-[8vmax] overflow-hidden sm:leading-[9vmax] font-medium text-[6vmax] leading-[7vmax]'>
        {"Experiences".split("").map((item,index)=>{
                            return <motion.span 
                            initial={{y:"100%"}}
                            animate={{y:"0%"}}
                            transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}
                            key={index}
                            className='inline-block'
                            >{item}</motion.span>
                        })}
                        </h1>
      </div>
      <div className='sm:mt-24 sm:py-12 w-full gap-12 flex flex-col items-start px-1 sm:flex-row sm:items-center justify-between pt-12'>
        <div className='sm:w-[25vmax] w-full flex items-center justify-start sm:gap-10 gap-3 h-full'>
          <div className='sm:w-[4.5vmax] sm:h-[4.5vmax] w-[7vmax] h-[7vmax] p-5 bg-black rounded-full'>
            <div style={{ transition: '0.3s', ease:'0.76, 0, 0.24, 1' }} className='sm:text-2xl text-lg w-full h-full flex items-center justify-center text-center font-medium text-white'>{phrases1[phraseIndex]}</div>
          </div>
          <h1 style={{ transition: '0.3s', ease:'0.76, 0, 0.24, 1' }} className='text-2xl text-nowrap font-medium flex '>{phrases2[phraseIndex]}</h1>
        </div>
        <div className='gray  flex flex-col sm:flex sm:flex-row sm:items-center  justify-end gap-10 h-full'>
          <p className='sm:w-1/3 sm:text-2xl text-xl w-[90%]'>We build engaging websites, brands & innovative e-commerce solutions.</p>
          <Button label="Case Studies" bgColor={"primary"} url="#" hvrColor={"black"} color={"white"}/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
