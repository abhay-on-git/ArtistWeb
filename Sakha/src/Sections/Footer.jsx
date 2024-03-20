import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Button from '../Components/Button';

function Footer() {
  return (
    <div className='w-full sm:px-16 sm:py-16 flex sm:flex-row flex-col '>
        <div className='sm:w-1/2 w-full h-full flex px-4 py-24 sm:mt-20 flex-col items-center sm:p-10 sm:gap-24 gap-10 '>
            <p className='sm:text-[2.7vmax] text-xl w-full font-medium  h-full leading-10'>
            We love creating unforgettable digital experiences, brands and websites with people like you.
            </p>
            <div className=' w-full h-1/2 flex flex-col sm:gap-4 gap-3 '>
                <h1 className='sm:text-lg sm:mt-0 text-3xl font-medium mt-1'>Get in touch</h1>
                <a className='sm:text-2xl font-medium' href="#">+44 207 112 82 85</a>
                <a className='sm:text-2xl font-medium' href="#">contact@gmail.com</a>
                <p className='sm:text-2xl font-medium'>12/54 rehnghar wandapura Few York</p>
            </div>
        </div>
        <div className='sm:w-1/2 w-full h-fit flex flex-col px-4 sm:mt-20 sm:px-32 gap-10 sm:py-12 '>
            <div className='w-full bg-black sm:p-5 p-6 rounded-3xl text-white flex items-center justify-between'>
              {["Follow us",<FaInstagram />,<FaFacebook />, "W"].map((item,index)=>{
                return <a href="#" className={`text-2xl ${index === 0 && "sm:mr-24 mr-16"} `} key={index}>{item}</a>
              })}
            </div>
            <div className='sm:p-10 p-8 w-full rounded-3xl sm:mt-12 bg-[#e2e7ea] flex gap-6 flex-col items-center justify-center'>
                <h1 className='text-5xl font-medium text-nowrap'>Ready to talk?</h1>
                <h1>We're a nice bunch, let's have a chat.</h1>
                <Button label={"Start a Project"} color={"white"} bgColor={"primary"}/>
            </div>
              <a href="#" className='text-lg font-medium sm:mt-10 mx-auto mb-4'>Developer : Abhay Agnihoteri</a>
        </div>

    </div>
  )
}

export default Footer