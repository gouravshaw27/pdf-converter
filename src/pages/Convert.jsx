import React from 'react'
import './Convert.css'

const Convert = () => {
  return (
    <div className='main'>
      <div className="head">
        <h1>PDF Converter</h1>
      </div>
      <div className="input-box">
      <label className="input">
        <input type="file" />
        <button className='choose-file'>CHOOSE FILES</button>
        <button title="Expand menu"className="expand">^</button>
      </label>
      </div>
        <div className='text'>
          <p>or drop files here</p>
          </div>
      <div className="para">
        <h5>Convert files from and to PDF easily with our free PDF converter—no sign-up needed. Just drag and drop your files to get started.</h5>
      </div>

      
    </div>
  )
}

export default Convert
