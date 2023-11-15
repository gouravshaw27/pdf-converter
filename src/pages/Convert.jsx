import React from 'react'
import HeroSection from './HeroSection'

const Convert = () => {
    const data={
        name: "PDF Converter",
        backgroundColor1:"#774360",
        backgroundColor2:"#cd4e94"
        
    }
    
  return (
   <HeroSection {...data}/>
  )
}

export default Convert
