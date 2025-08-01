import React from "react";
import CategoryCard from "./CategoryCard";
import '/src/index.css';
import { getRefreshment , getAccompaniment,getStarter,getMultiCuisine,getMainCourse,getDessert,getSoup,getSalad} from "../service/DishService";
import { useAccompaniment, useDessert, useMainCourse, useMultiCuisine, useRefreshment, useSalad, useSoup, useStarter } from "../hooks/useDishState";
import { useDispatch } from "react-redux";
import  { useEffect } from "react";


const Categories = () => {
  const dispatch=useDispatch();
  const refreshment = useRefreshment();
  const starter = useStarter();
  const soup = useSoup();
  const accompaniment= useAccompaniment();
  const multiCuisine=useMultiCuisine();
  const mainCourse= useMainCourse();
  const salad = useSalad();
  const dessert = useDessert();
  if(refreshment.length===0 || starter.length===0 ||
     soup.length===0 ||accompaniment.length ===0 ||
      multiCuisine.length===0 || mainCourse.length===0 ||
       salad.length===0 || dessert.length===0)
  {
    getRefreshment(dispatch);
    getStarter(dispatch);
    getSoup(dispatch);
    getAccompaniment(dispatch);
    getMultiCuisine(dispatch);
    getMainCourse(dispatch);
    getSalad(dispatch);
    getDessert(dispatch);
  }

  const categories = [
    {
      title: "Refreshment",
      description: "Light beverages and bites to begin your meal",
      count: refreshment.length,
      dishes : refreshment
    },
    {
      title: "Salad",
      description: "A fresh and healthy addition to every meal",
      count: salad.length,
      dishes : salad
    },
    {
      title: "Soup",
      description: "Warm and comforting bowls to start your dining journey",
      count: soup.length,
      dishes : soup
    },
    {
      title: "Accompaniment",
      description: "Perfect sides to complement your main dishes",
      count: accompaniment.length,
      dishes : accompaniment
    },
    {
      title: "Starter",
      description: "Flavor-packed starter to awaken your appetite",
      count: starter.length,
      dishes : starter
    },
    {
      title: "Main Course",
      description: "Our signature main dishes",
      count:mainCourse.length,
      dishes : mainCourse
    },
    {
      title: "Multi Cuisine",
      description: "A curated selection from global flavors",
      count:multiCuisine.length,
      dishes :multiCuisine 
    },
    {
      title: " Dessert",
      description: "Sweet treats to end your meal on a delightful note",
      count:dessert.length,
      dishes : dessert
    },
  ];

  return (
    
    <div className="category-container">
      <h1 className="category-title">Menu Categories</h1>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            description={cat.description}
            count={cat.count}
            dishes={cat.dishes}
          />
          
        ))
       }
      </div>
    </div>
  );
};

export default Categories;
