import React from 'react'
import './Split.css'
import HeroSection from './HeroSection'



const Split = () => {
    const data={
        name: "PDF Spliter",
    }
  return (
   <HeroSection {...data}/>
  )
}

export default Split
