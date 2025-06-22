
import React from 'react';
import '/src/index.css';
import NavBar from '../component/Navbar';

function DashboardPage  ()  {
  return (
    <div className="dashboard-container">
     
      <div className="dashboard-content">
      <NavBar/>
        <h2>Welcome to Dashboard</h2>
        <p>This is your content area.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
