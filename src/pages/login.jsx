import React from 'react'
import './login.css'

const login = () => {
  return (
    <div className='login'>
        <div className="container">
            <h1>Log-in</h1>
            <div className="fields">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='E-mail' />
                <input type="text" placeholder='Password' />
            </div>
            <button>Log-in</button>
            <p>Already have an account <span>Login</span></p>
            <div className="agree"><input type="checkbox" name='' id='' /></div>

        </div>
      
    </div>
  )
}

export default login 