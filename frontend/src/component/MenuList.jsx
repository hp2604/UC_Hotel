import React from "react";
import MenuListCard from "./MenuListCard";
import '/src/index.css';
import Navbar from "./Navbar";
import { useSelectedCategory } from "../hooks/useDishState";

const MenuList = () => {  
  const dishes = useSelectedCategory();
  

  return (
    <>
    <Navbar/>
       <div className="MenuList-container">
      {dishes.map((dish, index) => (
        <MenuListCard key={index} {...dish} />
      ))}
      
    </div>
    </>
    
   
  );
};

export default MenuList;
