import React from 'react'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Plans from './Sections/Plans'
import LocomotiveScroll from 'locomotive-scroll'
const App = () => {
  const locomotivScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-100'>
      <Hero />
      <Services/>
      <Plans/>
    </div>
  )
}

export default App