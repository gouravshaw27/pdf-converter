import React from 'react'
import './Split.css'
import HeroSection from './HeroSection'



const Split = () => {
    const data={
        name: "PDF Spliter",
        backgroundColor1:"#610C9F",
        backgroundColor2:"#9d5acc"
    }
  return (
   <HeroSection {...data}/>
  )
}

export default Split
