// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/src/index.css';
import {
  FaHome,
  FaTable,
  FaShoppingCart,
  FaCreditCard,
  FaUtensils,
  FaSignOutAlt
} from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-brand">UC Hotel</div>
      <div className="navbar-links">
        <NavItem to="/dashboard" icon={<FaHome />} label="Dashboard" active={currentPath === '/dashboard'} />
        <NavItem to="/tables" icon={<FaTable />} label="Tables" active={currentPath === '/tables'} />
        <NavItem to="/orders" icon={<FaShoppingCart />} label="Orders" active={currentPath === '/orders'} />
        <NavItem to="/payments" icon={<FaCreditCard />} label="Payments" active={currentPath === '/payments'} />
        <NavItem to="/dish" icon={<FaUtensils />} label="Dish" active={currentPath === '/dish'} />
      </div>
      <Link to="/" className="navbar-logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </Link>
    </nav>
  );
};

const NavItem = ({ to, icon, label, active }) => (
  <Link to={to} className={`nav-item ${active ? 'active' : ''}`}>
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
