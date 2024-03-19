import React from 'react'
import Button from '../Components/Button'

function GoodAt() {
  return (
    <div className='w-full h-screen flex sm:flex-row flex-col sm:px-16'>
        <div className='sm:w-[45%] sm:h-full w-full h-[50%] flex flex-col items-start justify-center gap-2 sm:py-24 sm:px-0 px-4 '>
           <h1 className='sm:text-6xl text-[6.2vmax]  font-medium sm:mb-5'>We’re good at</h1>
           <h1 className='sm:text-[1.3vmax] mb-3'>Services</h1>
           {["E-Commerce","Website Design","Web Development","Digital Products","Brand Identities","SEO Optimisation"].map((item,index)=>{
            return <a href="#" className='sm:text-[2.5vmax] text-[2.7vmax] font-medium' key={index}>{item}</a>
           })}
        </div>
        <div className='sm:w-[55%] w-full flex items-center justify-center sm:h-full h-1/2 p-6'>
            <div className='w-full sm:h-[26vmax] h-full overflow-hidden rounded-3xl sm:p-12 p-4 bg-primary'>
               <div className='w-full h-[70%] '>
               <p className='sm:text-[2.7vmax] text-[3.5vmax] text-white font-semibold leading-[4.5vmax] sm:leading-[3.5vmax]'>We’re all ears when it comes to
                hearing about your business goals.
                Give us a call, we're a nice bunch.</p>
               </div>
               <div className='w-full flex items-center gap-6 h-[30%]'>
                <Button label={"Let's talk"} bgColor={"white"} color={"black"} url={"#"}/>
                <Button label={"0207 112 82 85"} bgColor={"transparent"}  color={"white"} url={"#"} />
               </div>
            </div>
        </div>

    </div>
  )
}

export default GoodAt