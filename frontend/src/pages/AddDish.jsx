import React, { useEffect, useState } from 'react';
import '/src/index.css';
import { FaPlus, FaClock, FaEdit, FaTrash, FaDollarSign } from 'react-icons/fa';
import NavBar from '../component/Navbar';
import { addDish } from '../service/DishService';
const DishManagementPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [data,setData] =useState({
    dishName :"" ,
    category :"",
    description : "",
    price : "",
    time : "",
    avail : ""
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };


  const handleAddDish = async (e) => {
    e.preventDefault();
      setShowForm(false);
      addDish(data);
     
  };

  return (
    <>
    <NavBar/>
      <div className="dish-container">
      <div className="dish-header">
        <div>
          <h2>Menu Management</h2>
          <p>Manage your restaurant dishes and menu items</p>
        </div>
        <button className="add-dish-btn" onClick={() => setShowForm(!showForm)}>
          <FaPlus /> Add New Dish
        </button>
      </div>
      {showForm && (
        <form className="dish-form" onSubmit={handleAddDish}>
          <h3>Add New Dish</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Dish Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter dish name"
                onChange={(e)=>handleChange(e,"dishName")}
                required
              />
            </div>

            <div className="form-group">
              <label>Price </label>
              <input
                type="number"
                name="price"
                onChange={(e)=>handleChange(e,"price")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select name="category" required value={data.category} onChange={(e)=>handleChange(e,"category")}>
                <option value="">Select category</option>
                <option value="Refreshment">Refreshment</option>
                <option value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Accompaniment">Accompaniment</option>
                <option value="Starter">Starter</option>
                <option value="MultiCuisine">Multi Cuisine</option>
                <option value="MainCourse">MainCourse</option>
                <option value="Dessert"> Dessert</option>
              </select>
            </div>
              
            <div className="form-group">
              <label>Preparation Time (minutes)</label>
              <input
                type="number"
                name="time"
                onChange={(e)=>handleChange(e,"time")}

               
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter dish description"
              onChange={(e)=>handleChange(e,"description")}
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="status"
              onChange={(e)=>handleChange(e,"avail")}
              checked= {data.avail}
            />
            <label>Available for ordering</label>
          </div>

          <div className="form-actions">
            <button type="submit" className="add-dish-btn">Add Dish</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}

      
    </div>
    </>
   
  );
};

export default DishManagementPage;
