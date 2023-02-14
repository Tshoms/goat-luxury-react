import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cartItems.push(action.payload);
    },
  },
});

// store ---------
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addProduct } = cartSlice.actions;
