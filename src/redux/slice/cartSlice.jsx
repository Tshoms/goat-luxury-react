import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };

      state.cartItems.push(newItem);
      /*state.cartItems.push(action.payload);*/
    },
  },
});

// export Actions and Reducer -----------
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
