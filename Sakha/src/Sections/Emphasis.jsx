import React from 'react'

function Emphasis() {
  return (
    <div className='w-full h-screen  sm:px-16 p-6'>
        <div className='w-full h-full flex sm:flex-row flex-col items-center justify-between'>
        <div className='sm:w-1/2 w-full flex items-center justify-center sm:h-full h-[65%] '>
           <div className='w-full sm:h-[60%] h-full flex flex-col items-center justify-between '>
              <h1 className='sm:text-6xl mb-4 sm:text-start text-center font-medium sm:leading-[4.5vmax] text-[4.5vmax] leading-9'>Let our experienced team
              elevate your digital goals.</h1>
              <div className='w-full flex sm:flex-row  flex-col sm:h-[40%] h-[80%] '>
                <div className='sm:w-1/2 flex sm:items-start items-center font-medium justify-center  flex-col h-full '>
                     <h1 className='sm:text-5xl text-3xl mb-3 sm:mb-5'>250+</h1>
                     <h1 className='text-2xl'>Five Star Reviews</h1>
                </div>
                <div className='sm:w-1/2 flex sm:items-start items-center font-medium justify-center  flex-col h-full '>
                     <h1 className='sm:text-5xl text-3xl mb-3 sm:mb-5'>100+</h1>
                     <h1 className='text-2xl'>In-House Experts</h1>
                </div>

              </div>
           </div>
        </div>
        <div className='sm:w-1/2 w-full flex sm:h-full h-[35%] '>
            <div className='w-full  sm:h-[50%] h-[90%] self-end sm:p-16'>
                <p className='sm:text-2xl'>
                We have successfully completed over 300+
                projects from a variety of industries. In our team,
                designers work alongside developers and digital
                strategists, we believe this is our winning recipe for
                creating digital products that make an impact.
                </p>
            </div>
        </div>

        </div>

    </div>
  )
}

export default Emphasis