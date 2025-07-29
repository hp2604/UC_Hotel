
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

const getRefreshment =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Refreshment')
      .then((res)=>{dispatch(setRefreshment(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);     
  } 

const getSalad=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Salad')
      .then((res)=>{dispatch(setSalad(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);      
 }
const getSoup =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Soup')
      .then((res)=>{dispatch(setSoup (res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);    
}
const getAccompaniment =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Accompaniment')
      .then((res)=>{dispatch(setAccompaniment(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);    
}
const getStarter =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Starter')
      .then((res)=>{dispatch(setStarter(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);
}
const getMultiCuisine =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/MultiCuisine')
      .then((res)=>{dispatch(setMultiCuisine(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);
}
const getMainCourse =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/MainCourse')
      .then((res)=>{dispatch(setMainCourse(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);
}
const getDessert =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      instance.get('/admin/dish/Dessert')
      .then((res)=>{dispatch(setDessert(res.data));})
      .catch((error)=>{console.log(error);});  
    },[dispatch]);
}
const getSelectedCategory=()=>{
  return useSelector((state)=>state.dish.selectedCategory);
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

export {addDish,getRefreshment,getSalad,getSoup,getAccompaniment,getStarter,getMultiCuisine,getMainCourse,getDessert,getSelectedCategory,saveEdit,deleteDish};