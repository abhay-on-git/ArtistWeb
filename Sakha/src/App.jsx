import React from 'react'
import Hero from './Sections/Hero'
import Services from './Sections/Services'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-100'>
      <Hero />
      <Services/>
    </div>
  )
}

export default App