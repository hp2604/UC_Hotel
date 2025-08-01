
import instance from "../api/axios";
import { toast } from "react-toastify";
import  { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  setAccompaniment, setDessert, setMainCourse, setMultiCuisine, setRefreshment, setSalad, setSelectedCategory, setSoup, setStarter } from "../redux/dishSlice";

var response='';
var status ='';

const addDish = async(dish)=>{
    try{
        response=await instance.post('/admin/dish',dish);
        status=response.status;
        if(status===202)
        {
            toast.success("New Dish Added");
        }
        else{
            toast.error("Dish not Added");
        }
    }
    catch(error)
    {
        console.log(error)
        toast.error("Something went wrong");
    }
}

const getRefreshment =(dispatch)=>{
      instance.get('/admin/dish/Refreshment')
      .then((res)=>{dispatch(setRefreshment(res.data));})
      .catch((error)=>{console.log(error);});  
  } 

const getSalad=(dispatch)=>{
      instance.get('/admin/dish/Salad')
      .then((res)=>{dispatch(setSalad(res.data));})
      .catch((error)=>{console.log(error);});  
 }
const getSoup =(dispatch)=>{
      instance.get('/admin/dish/Soup')
      .then((res)=>{dispatch(setSoup (res.data));})
      .catch((error)=>{console.log(error);});  
}
const getAccompaniment =(dispatch)=>{
      instance.get('/admin/dish/Accompaniment')
      .then((res)=>{dispatch(setAccompaniment(res.data));})
      .catch((error)=>{console.log(error);});  
}
const getStarter =(dispatch)=>{
      instance.get('/admin/dish/Starter')
      .then((res)=>{dispatch(setStarter(res.data));})
      .catch((error)=>{console.log(error);});  
}
const getMultiCuisine =(dispatch)=>{
      instance.get('/admin/dish/MultiCuisine')
      .then((res)=>{dispatch(setMultiCuisine(res.data));})
      .catch((error)=>{console.log(error);});  
}
const getMainCourse =(dispatch)=>{
      instance.get('/admin/dish/MainCourse')
      .then((res)=>{dispatch(setMainCourse(res.data));})
      .catch((error)=>{console.log(error);});  
}
const getDessert =(dispatch)=>{
      instance.get('/admin/dish/Dessert')
      .then((res)=>{dispatch(setDessert(res.data));})
      .catch((error)=>{console.log(error);});  
}
const saveEdit =async(dish)=>{
  response=await instance.put('/admin/edit',dish);
  status=response.status;
  
  if(status===200)
  {
    toast.success("Done");
  }
  else
  {
    toast.error("Not Updated");
  }
}

const deleteDish= async (dishId)=>{
  try
  {
    response=await instance.delete('/admin/delete/'+dishId);
    status=response.status;
    toast.info("Deleted");
  }
 
  catch (error){
    console.log(error);
    toast.error("Not Deleted ");
  }

}

export {addDish,getRefreshment,getSalad,getSoup,getAccompaniment,getStarter,getMultiCuisine,getMainCourse,getDessert,saveEdit,deleteDish};