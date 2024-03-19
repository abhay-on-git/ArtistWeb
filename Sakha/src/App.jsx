import React from 'react'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Plans from './Sections/Plans'
import GoodAt from './Sections/GoodAt'
import Emphasis from './Sections/Emphasis'
import LocomotiveScroll from 'locomotive-scroll'
const App = () => {
  const locomotivScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-100'>
      <Hero />
      <Services/>
      <Plans/>
      <Emphasis/>
      <GoodAt/>
    </div>
  )
}

export default App