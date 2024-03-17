import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Cards from '../Components/Cards';
import Button from '../Components/Button';

function Services() {
  const controls = useAnimation();

  const handleScroll = () => {
    controls.start({ x: "-100%" }); // Animate the div towards left
  };

  return (
    <div className='relative w-full min-h-screen sm:px-16 sm:overflow-hidden bg-zinc-100'>
      <motion.div 
        className={`scroller absolute flex sm:flex-row flex-col items-center justify-center min-w-screen gap-8 sm:py-40 min-h-screen`}
        initial={{ x: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        onScroll={handleScroll}
      >
        <div className='sm:w-[30vmax] w-full h-fit sm:h-[35vmax] flex flex-col justify-between sm:items-start items-center mt-4 pb-5'>
          <div className='w-full text-center sm:text-start  h-[38%] flex flex-col justify-between'>
            <h1 className='sm:text-6xl text-5xl font-medium mb-4'>Work</h1>
            <p className='sm:text-2xl mb-8 sm:w-[70%]'>A selection of our crafted work, built from scratch by our talented in-house team.</p>
          </div>
          <Button label={"Case Studies"} color={"white"} />
        </div>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <div className='w-[30vmax] sm:h-[12vmax] h-[17vmax] m-auto flex flex-col justify-between items-center mt-4 pb-5'>
          <div className='w-full h-[38%] flex flex-col justify-between items-center'>
            <h1 className='sm:text-6xl text-3xl font-medium mb-3 '>View More</h1>
          </div>
          <Button label={"Case Studies"} bgColor={"transparent"} bdrColor={"primary"} color={"black"} />
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
