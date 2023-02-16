import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";

// store ---------
export default configureStore({
  reducer: {
    cartItems: cartReducer,
  },
});
