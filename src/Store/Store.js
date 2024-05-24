import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './DataSlice'; 
import cartReducer from './Cartslice'

export default configureStore({
    reducer:{
        Products: dataReducer,
        cart: cartReducer
    }
});
