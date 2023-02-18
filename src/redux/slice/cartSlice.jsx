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
        image: action.payload.image,
      };

      state.cartItems.push(newItem);
    },
    deleteProduct: (state, action) => {
      const id = { id: action.payload.id };
      state.cartItems.find((item) => item.id === id);
      state.cartItems.pop(id);
      console.log(state.cartItems);
    },
  },
});

// export Actions and Reducer -----------
export const { addProduct } = cartSlice.actions;
export const { deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
