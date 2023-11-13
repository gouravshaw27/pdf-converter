import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/part-img1.png'
import { Outlet,Link } from 'react-router-dom';



const Navbar = () => {

  const[activeTab,setActiveTab] = useState('Convert');
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>PDF-Converter</p>
      </div>
      
        <ul className="nav-menu">
          <li className={activeTab==='Convert'?'menu-item-active':""} onClick={()=>{setActiveTab('Convert')}}><Link style={{textDecoration:'none', color:'#626262'}}to='/Convert'>Convert</Link>{activeTab==='Convert'?<div></div>:<></>}</li>
          <li className={activeTab==='Split'?'menu-item-active':""} onClick={()=>{setActiveTab('Split')}}><Link style={{textDecoration:'none', color:'#626262'}}to='/Split'>Split</Link>{activeTab==='Split'?<div></div>:<></>}</li>
          <li className={activeTab==='Compress'?'menu-item-active':""} onClick={()=>{setActiveTab('Compress')}}><Link style={{textDecoration:'none', color:'#626262'}}to='/compress'>Compress</Link>{activeTab==='Compress'?<div></div>:<></>}</li>
          <li className={activeTab==='Contact-us'?'menu-item-active':""} onClick={()=>{setActiveTab('Contact-us')}}><Link style={{textDecoration:'none', color:'#626262'}}to='/Contact'>Contact-us</Link>{activeTab==='Contact-us'?<div></div>:<></>}</li>
        </ul>
      <div className="log-in">
        <Link to='/login'><button className='btn btn-outline-danger'>Log-in</button></Link>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Navbar
