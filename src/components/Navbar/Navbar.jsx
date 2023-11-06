import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/part-img1.png'
import { Outlet,Link } from 'react-router-dom';



const Navbar = () => {

  const[activeTab,setActiveTab] = useState('Home');
  
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>PDF-Converter</p>
      </div>
      
        <ul className="nav-menu">
          <li className={activeTab==='Home'?'menu-item-active':""} onClick={()=>{setActiveTab('Home')}}><Link style={{textDecoration:'none', color:'#626262'}}to='/home'>Home </Link>{activeTab==='Home'?<div></div>:<></>}</li>
          <li className={activeTab==='Service'?'menu-item-active':""} onClick={()=>{setActiveTab('Service')}}>Service{activeTab==='Service'?<div></div>:<></>}</li>
          <li className={activeTab==='About'?'menu-item-active':""} onClick={()=>{setActiveTab('About')}}>About{activeTab==='About'?<div></div>:<></>}</li>
          <li className={activeTab==='Contact-us'?'menu-item-active':""} onClick={()=>{setActiveTab('Contact-us')}}>Contact-us{activeTab==='Contact-us'?<div></div>:<></>}</li>
        </ul>
      <div className="log-in">
        <Link to='/login'><button className='btn btn-outline-danger'>Log-in</button></Link>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Navbar
