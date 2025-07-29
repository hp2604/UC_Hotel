import React from "react";
import '/src/index.css';
import {  useNavigate } from "react-router-dom";
import { setSelectedCategory } from "../redux/dishSlice";
import { useDispatch } from "react-redux";




const CategoryCard = ({ title, description, count ,dishes }) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const setCategory=()=>{
    dispatch(setSelectedCategory(dishes));
    navigate("/menuList");
  }
  return (
    <div className="category-card">
      <h2 className="category-heading"> {title}</h2>
      <p className="category-description">{description}</p>
      <div className="category-footer">
        <span className="category-count">{count} dishes</span>
        <button className="category-button"  onClick={()=>setCategory()} >View Menu</button>
      </div>
    </div>
  );
};

export default CategoryCard;