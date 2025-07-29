import { createSlice } from '@reduxjs/toolkit';

const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    refreshment: [],
    salad:[],
    soup:[],
    accompaniment:[],
    starter:[],
    multiCuisine :[],
    mainCourse :[],
    dessert :[],
    selectedCategory:[]
  },
  reducers: {
    setRefreshment: (state, action) => {
      state.refreshment = action.payload;
    },
    setSalad: (state, action) => {
      state.salad = action.payload;
    },
    setSoup: (state, action) => {
      state.soup = action.payload;
    },
    setAccompaniment: (state, action) => {
      state.accompaniment = action.payload;
    },
    setStarter: (state, action) => {
      state.starter = action.payload;
    }, 
    setMultiCuisine: (state, action) => {
      state.multiCuisine = action.payload;
    },
    setMainCourse: (state, action) => {
      state.mainCourse = action.payload;
    },
    setDessert: (state, action) => {
      state.dessert = action.payload;
    },
    setSelectedCategory :(state, action) => {
      state.selectedCategory = action.payload;
    },

  },
});

export const { setRefreshment , setSoup,setSalad,setStarter,setAccompaniment,setMultiCuisine,setMainCourse,setDessert ,setSelectedCategory} = dishSlice.actions;

export default dishSlice.reducer;

