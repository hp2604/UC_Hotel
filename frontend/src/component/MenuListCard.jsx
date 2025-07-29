import React ,{useState} from "react";
import '/src/index.css';
import { FaRegTrashAlt,FaPen } from "react-icons/fa";
import { saveEdit,deleteDish } from "../service/DishService";

const MenuListCard = ({ dishName, category, avail, description, price, time ,dishNo}) => {
  const [showForm, setShowForm] = useState(false);
  const [editDish,setEditDish]=useState({
    dishName :dishName ,
    category :category,
    description : description,
    price : price,
    time : time,
    avail : avail,
    dishNo : dishNo
  })
  const submitChange = async (e) => {
      e.preventDefault();
      saveEdit(editDish);
    setShowForm(false);  
  };

  const removeDish = async(e) => {
    deleteDish(dishNo);
  };

  return (
    <div className="MenuList-card">
      <div className="MenuList-header">
        <h2 className="MenuList-name">{dishName}</h2>
        <div className="MenuList-actions">
          <span className="MenuList-icon" onClick={() => setShowForm(!showForm)}><FaPen/></span>
          <span className="MenuList-icon" onClick={()=>removeDish()}><FaRegTrashAlt /></span>
        </div>
        
      </div>

      <div className="MenuList-tags">
        <span className="MenuList-tag">{category}</span>
        {avail && <span className="MenuList-tag MenuList-available">Available</span>}
      </div>

      <p className="MenuList-description">{description}</p>

      <div className="MenuList-info">
        <span className="MenuList-price">Rs <strong>{price.toFixed(2)}</strong></span>
        <span className="MenuList-time">{time}min</span>
      </div>
      {showForm && (
        <form className="dish-form" onSubmit={submitChange} >
          <h3>Edit Dish</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Dish Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter dish name"
                value={editDish.dishName}
                onChange={(e)=>setEditDish({...editDish,dishName:e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Price </label>
              <input
                type="number"
                name="price"
                value={editDish.price}
                onChange={(e)=>setEditDish({...editDish,price : e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select name="category" required value={editDish.category} onChange={(e)=>setEditDish({...editDish,category : e.target.value})}>
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
                value={editDish.time}
                onChange={(e)=>setEditDish({...editDish,time: e.target.value})}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter dish description"
              value={editDish.description}
              onChange={(e)=>setEditDish({...editDish,description:e.target.value})}             
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="status"
              checked={editDish.avail}
              onChange={(e)=>setEditDish({...editDish,avail:e.target.value})}
            />
            <label>Available for ordering</label>
          </div>

          <div className="form-actions">
            <button type="submit" className="add-dish-btn">Save</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
     
    </div>
  );
};

export default MenuListCard;
