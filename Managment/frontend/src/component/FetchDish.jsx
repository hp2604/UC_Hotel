import React from "react";
import { getRefreshment } from "../service/DishService";

const FetchDish=({dis})=>{
    getRefreshment(dis);
}
export default FetchDish;