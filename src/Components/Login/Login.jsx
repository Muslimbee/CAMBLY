import React from 'react'
import { useGlobalContext } from '../../context'
import qush1 from '../../assets/Image/qush1.webp'
import '../../Components/Login/Login.scss'

export default function Login() {
    const {username, setUsername, password, setPassword, handleLogin} = useGlobalContext();
  return (
    <div className='login'>
      <div className="login-card">
        <div className="name">
            <img src='https://static.cambly.com/_next/static/media/primary.650b62ae.svg' alt="qush" />
        </div>
            <h2>Welcome back!</h2>
            <div className="social">
              <div className="card">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
              </div>
              <div className="card">
              <img  src="https://img.icons8.com/ios-filled/150/mac-os.png" alt="mac-os"/>
              </div>
              <div className="card">
              <img width="144" height="144" src="https://img.icons8.com/color/144/facebook-new.png" alt="facebook-new"/>
              </div>
              <div className="card">
              <img width="96" height="96" src="https://img.icons8.com/color/96/chat--v1.png" alt="chat--v1"/>
              </div>
            </div>
            <div className="hr-or">
              <hr /> <p>OR</p> <hr />
            </div>

            <div className='label'>
              <p>Email address</p>
              <input type="text" 
              placeholder='Enter your email address' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='label'>
              <p>Password</p>
              <input type='password'  
              placeholder='Enter a password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <a className='label-a' href="#">Forgot password?</a>

            <button className='label-button' type="button" onClick={handleLogin}>Log nin</button>

            <div className="sign">
              <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
      </div>
    </div>
  )
}
