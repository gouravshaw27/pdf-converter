import React from 'react'
import './compress.css'
import HeroSection from './HeroSection'

const Compress = () => {

  const data = {
    name : "PDF Compresser",
  };
  return (
    <HeroSection {...data}/>
  )
}

export default Compress
