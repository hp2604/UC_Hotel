import {  useSelector } from "react-redux"

export const useRefreshment=()=>{
    return useSelector((state)=>state.dish.refreshment);
}

export const useSoup=()=>{
    return useSelector((state)=>state.dish.soup);
}

export const useStarter=()=>{
    return useSelector((state)=>state.dish.starter);
}

export const useSalad=()=>{
    return useSelector((state)=>state.dish.salad);
}

export const useMainCourse=()=>{
    return useSelector((state)=>state.dish.mainCourse);
}

export const useAccompaniment=()=>{
    return useSelector((state)=>state.dish.accompaniment);
}

export const useMultiCuisine=()=>{
    return useSelector((state)=>state.dish.multiCuisine);
}

export const useDessert=()=>{
    return useSelector((state)=>state.dish.multiCuisine);
}

export const useSelectedCategory=()=>{
    return useSelector((state)=>state.dish.selectedCategory);
}
  


