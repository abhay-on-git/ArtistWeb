import React, { useRef } from 'react';
import { motion,useScroll,useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Cards from '../Components/Cards';
import Button from '../Components/Button';

function Services() {
const targetRef = useRef(null);
const {scrollYProgress} = useScroll({
  target:targetRef,
})

const { ref: stickyRef, inView } = useInView({
  triggerOnce: true,
  threshold: 0.5, 
});

const opacity = useTransform(
  scrollYProgress,
  [0, 0.5], 
  [0, inView ? 1 : 0] 
);

const xLargeScreen = useTransform(scrollYProgress, [0, 1], ["1%", "-61%"]);
const xSmallScreen = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <div ref={targetRef} className='relative w-full min-h-[300vh] '>
      <div 
      ref={stickyRef}
      // style={{opacity}}
        className={`sticky top-0 flex w-full h-screen items-center overflow-hidden`}
      >
        <motion.div 
        style={{ x: window.innerWidth >= 640 ? xLargeScreen : xSmallScreen }} 
        initial={{ opacity: 0 }} // Initial opacity set to 0 for stagger effect
        animate={{ opacity: 1 }} // Opacity gradually animates to 1
        transition={{ staggerChildren: 0.2 }}
        className=' h-full flex items-center justify-center  gap-8 sm:py-40 min-h-screen'>
        <div className='sm:w-[35vmax] w-[85vmax] h-fit sm:h-[35vmax] flex flex-col justify-between sm:items-start items-center mt-4 pb-5'>
          <div className='w-full  text-center sm:text-start px-2 h-[38%] flex flex-col justify-between'>
            <h1 className='sm:text-6xl text-5xl font-medium mb-4'>Services</h1>
            <p className='sm:text-2xl mb-8 sm:w-[70%]'>A selection of our crafted work, built from scratch by our talented in-house team.</p>
          </div>
          <Button label={"Case Studies"} color={"white"} hvrColor={"black"} />
        </div>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <div className='sm:w-[35vmax] w-full  h-fit sm:h-[15vmax] flex flex-col justify-between items-center mt-4 pb-5'>
          <div className='w-full px-2 h-[38%]'>
            <h1 className='sm:text-6xl text-5xl text-center font-medium'>Services</h1>
          </div>
          <Button label={"Case Studies"} color={"white"} hvrColor={"black"} />
        </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
