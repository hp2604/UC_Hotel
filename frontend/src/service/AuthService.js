import axios from "axios";
import { setToken,getToken, removeToken } from "./JwtToken";
import { useState } from "react";
import { toast } from "react-toastify";

 var status='';
 var responseBody='';
 var error=false;
 var auth=false;



const  login=async(data)=>{
    try {
        
        const response=await axios.post('http://localhost:8080/auth/login',data);
        status=response.status;
        if(status===202)
        {
            const token=response.data;
            setToken(token);
            console.log("Login");
            
        }
        

    } catch (error) {
        responseBody=error.message;
        if(responseBody ==="Request failed with status code 400")
        {
            toast.warning("Passowrd or Username are wrong");
        }
        else
        {
            toast.error("Something went wrong");
        }
        
        error=true;
        
    }
};
const logout=()=>{
    removeToken();
    console.log("remove ");
    
};
 const getHeader=()=>{
    const token=getToken();
    return{
        Authorization:`Bearer ${token}`,
    };
 };
 export{login,logout,getHeader,responseBody,status,error,auth};
