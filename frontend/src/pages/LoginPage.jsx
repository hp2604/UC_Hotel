
import React, { useState } from 'react';
import '/src/index.css';
import { useNavigate } from 'react-router-dom';
import { Hotel } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from "axios";
import { setToken } from '../service/JwtToken';


function LoginPage  ()  {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );
      const status = response.status;
      console.log(status);
      const responseBody = response.data;
      console.log(responseBody);
      if (status === 202) {
        setToken(responseBody);
        
        
      } else if (status === 403) {
        toast.error(responseBody);
      }
    } catch (error) {
      toast.error("Something went wrong ");
    }
  };

  return (
    <>
   <div className="login-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <Hotel/>
        <h2>UC Hotels</h2>
        <p>Sign in to access your admin dashboard</p>

        <label>Username</label>
        <input
         id="username"
          type="text"
          placeholder="Enter your username"
          value={data.username}
          onChange={(e) => handleChange(e,"username")}
          required
        />
         <label>Password</label>
        <input
         id="password"
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => handleChange(e,"password")}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
   

       
  );
};

export default LoginPage;
