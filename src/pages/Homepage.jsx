import React, { useRef } from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Who from '../components/Who'
import Works from '../components/Works'






const Homepage = () => {

  

  return (
   <div className='HomeWrapper'>
        <Hero/>    
        <Who/>
        <Works />  
        <Contact/>      
   </div>
  )
}

export default Homepage