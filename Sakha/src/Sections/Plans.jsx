import React from 'react'
import Button from '../Components/Button'
import SmallBtn from '../Components/SmallBtn';

function Plans() {

 const screenSize = window.innerWidth > 640 ? <Button label={"Plans"}/> : <SmallBtn label={"Plans"} width={"12vmax"} bgColor={"primary"}/>
 
 return (
    <div className='w-full h-screen sm:px-16 px-5  '>
        <div className='w-full h-screen  flex sm:flex-row flex-col '>
            <div className='sm:w-1/2 flex flex-col sm:h-full h-fit'>
                <h1 className='sm:text-6xl text-4xl font-bold sm:text-left text-center py-5 w-full sm:py-20'>Your Digital Partners.</h1>
                <p className='sm:text-2xl px-1 sm:text-left text-center sm:w-[70%] mb-24'>We partner with companies of all sizes to solve
                                                    complex business challenges and define their digital
                                                    strategies and objectives that deliver results. We
                                                    help bring ideas to life and create brands, websites
                                                    & digital products that work.</p>

                 <div className='w-full sm:h-[13vmax] h-[5vmax] flex sm:items-start items-end justify-between sm:flex-col'>
                 {screenSize}
                 <h1 className='sm:text-2xl mt-20 self-end '>Brand Trusted Us.</h1>
                 </div>
            </div>
            <div className='sm:w-1/2 sm:h-full w-full h-1/2  flex items-center justify-center'>
                <div className=' sm:w-[90%] w-full sm:h-[40%] h-[50%] flex rounded-3xl sm:py-6 py-4 bg-[#d3d7da]'>
                   <div className='w-1/2 h-full flex flex-col items-center justify-center border-r border-gray-400'>
                     <h1 className='sm:text-6xl text-3xl sm:mb-5 mb-3 '>20</h1>
                     <h1 className='sm:text-2xl '>Year on the market</h1>
                   </div>
                   <div className='w-1/2 h-full flex flex-col items-center justify-center '>
                     <h1 className='sm:text-6xl text-3xl sm:mb-5 mb-3  '>500</h1>
                     <h1 className='sm:text-2xl '>Satisfied Customers</h1>
                   </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Plans