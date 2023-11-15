import React from 'react'
import './HeroSection.css'

const HeroSection = ({name,backgroundColor1,backgroundColor2}) => {

  return (
    <>
   
    <div className='main'>
      <div className="head">
        <h1>{name}</h1>
      </div>
      <div>
      <form  className='input-box' style={{backgroundColor:backgroundColor1}}>
      <label className="input" style={{backgroundColor:backgroundColor2}}>
        <input type="file" />
        <button className='choose-file' type='button' >CHOOSE FILES</button>
        <button title="Expand menu" type='button' className="expand">^</button>
      </label>
      </form>
      </div>
        <div className='text'>
          <p>or drop files here</p>
          </div>
          
      <div className="para">
        <h5>Convert files from and to PDF easily with our free PDF converter—no sign-up needed. Just drag and drop your files to get started.</h5>
      </div>

      
    </div>
    </>
  )
}

HeroSection.defaultProps = {
  name: 'Pdf Converter',
  backgroundColor1:"#774360",
  backgroundColor2:"#cd4e94"
};

export default HeroSection
