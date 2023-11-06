import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="container">
            <h2>Log-in</h2>
            <div className="fields">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='E-mail' />
                <input type="text" placeholder='Password' />
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