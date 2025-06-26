import axios from "axios";
import { getToken } from "./JwtToken";
import instance from "../api/axios";
import { toast } from "react-toastify";



var response='';
var status ='';


const addDish = async(dish)=>{
    try{
        response=await instance.post('/admin/dish',dish);
        status=response.status;
        console.log(status);
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
export {addDish};