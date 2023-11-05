import React, { useState } from 'react'
import './Navbar.css'

import '../Assets/img 1.jpg'


const Navbar = () => {

  const[activeTab,setActiveTab] = useState('Home');
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="img 1.jpg" alt="" />
        <p>PDF-Converter</p>
      </div>
      
        <ul className="nav-menu">
          <li className={activeTab==='Home'?'menu-item-active':""} onClick={()=>{setActiveTab('Home')}}>Home {activeTab==='Home'?<div></div>:<></>}</li>
          <li className={activeTab==='Service'?'menu-item-active':""} onClick={()=>{setActiveTab('Service')}}>Service{activeTab==='Service'?<div></div>:<></>}</li>
          <li className={activeTab==='About'?'menu-item-active':""} onClick={()=>{setActiveTab('About')}}>About{activeTab==='About'?<div></div>:<></>}</li>
          <li className={activeTab==='Contact-us'?'menu-item-active':""} onClick={()=>{setActiveTab('Contact-us')}}>Contact-us{activeTab==='Contact-us'?<div></div>:<></>}</li>
        </ul>
      <div className="log-in">
        <button className='btn btn-success'>Log-in</button></div>
    </div>
  )
}

export default Navbar
