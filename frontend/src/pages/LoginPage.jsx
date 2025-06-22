
import React, { useState } from 'react';
import '/src/index.css';
import { useNavigate } from 'react-router-dom';
import { Hotel } from 'lucide-react';


function LoginPage  ()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
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
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
         <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
    </>
   

       
  );
};

export default LoginPage;
