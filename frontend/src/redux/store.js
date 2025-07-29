import { configureStore } from '@reduxjs/toolkit';
import dishReducer from './dishSlice';

 const store = configureStore({
  reducer: {
    dish: dishReducer,
  },
});
export default  store;
