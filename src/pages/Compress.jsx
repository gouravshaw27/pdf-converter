import React from 'react'
import './compress.css'
import HeroSection from './HeroSection'

const Compress = () => {

  const data = {
    name : "PDF Compresser",
    backgroundColor1:"#132043",
    backgroundColor2:"#1F4172"
  };
  return (
    <HeroSection {...data}/>
  )
}

export default Compress
