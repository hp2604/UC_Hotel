
import React, { useState } from 'react';
import Navbar from "../component/NavBar";


const Login =()=>{
    const [isLogin, setIsLogin] = useState(true);
    const [existUser,setExitUser]=useState({
        email :"",
        password :""
    });
    const handleChange =(event,property)=>{
        setExitUser({...existUser,[property]:event.target.value});
    };

    const handlelogin=async (event)=>{
        event.preventDefault();
    };

    return(
    <>
     <Navbar/>
    <div className="login-container">
      <h1 className="login-title">Welcome to UC Restaurant</h1>
      <p className="login-subtitle">
        Sign in to your account or create a new one to make reservations and access exclusive offers.
      </p>

      <div className="login-tabs">
        <button
          className={`login-tab ${isLogin ? 'login-active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`login-tab ${!isLogin ? 'login-active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <div className="login-form-wrapper">
        {isLogin ? (
          <form className="login-form">
            <h2 className="login-form-heading">Sign In</h2>

            <label className="login-label">Email</label>
            <div className="login-input-group">
              <span className="login-icon">📧</span>
              <input type="email"
               placeholder="Enter your email"
               value={existUser.email} 
               onChange={(e)=>handleChange(e,"email")}
               required 
              />
            </div>

            <label className="login-label">Password</label>
            <div className="login-input-group">
              <span className="login-icon">🔒</span>
              <input type="password" 
              placeholder="Enter your password" 
              value={existUser.password}
              onChange={(e)=>handleChange(e,"password")}
              required />
              
            </div>

            <button className="login-submit">Sign In</button>
            <p className="login-forgot">Forgot your password?</p>
          </form>
        ) : (
          <form className="login-form">
            <h2 className="login-form-heading">Sign Up</h2>

            <label className="login-label">Full Name</label>
            <div className="login-input-group">
              <span className="login-icon">🧑</span>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <label className="login-label">Email</label>
            <div className="login-input-group">
              <span className="login-icon">📧</span>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <label className="login-label">Password</label>
            <div className="login-input-group">
              <span className="login-icon">🔒</span>
              <input type="password" placeholder="Create a password" required />
            </div>

            <button className="login-submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>


    </>
    );
}
export default Login;