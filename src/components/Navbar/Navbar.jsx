import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/img 1.jpg'


const Navbar = () => {

  const[home,setHome] = useState('Home');
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="{logo}" alt="" />
        <p>PDF-Converter</p>
      </div>
      
        <ul className="nav-menu">
          <li onClick={()=>{setHome('Home')}}>Home {home==='Home'?<hr/>:<></>}</li>
          <li onClick={()=>{setHome('Service')}}>Service{home==='Service'?<hr/>:<></>}</li>
          <li onClick={()=>{setHome('About')}}>About{home==='About'?<hr/>:<></>}</li>
          <li onClick={()=>{setHome('Contact-us')}}>Contact-us{home==='Contact-us'?<hr/>:<></>}</li>
        </ul>
      <div className="log-in">
        <button>Log-in</button></div>
    </div>
  )
}

export default Navbar
