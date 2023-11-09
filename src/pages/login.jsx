import React from 'react'
import Logo from '../components/Assets/part-img1.png'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="container">
          <div className="head">
            <h2>Log-in</h2>
            <img src={Logo} alt="" />
            </div>
            <div className="fields">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Password' />
            </div>
            <button>Log-in</button>
            <p className='login-login'>Already have an account? <span>Login</span></p>
            <div className="agree">
              <input type="checkbox" name='' id='' />
              <p>I agree to the terms of use & privacy policies</p>
              </div>

        </div>
      
    </div>
  )
}

export default Login 