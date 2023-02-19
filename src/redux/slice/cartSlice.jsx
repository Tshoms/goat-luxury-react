import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const updateLocalStorage = (newItemArray) => {
  localStorage.setItem("itemData", JSON.stringify(newItemArray));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getLocalStorageData: (state) => {
      state.cartItems = JSON.parse(localStorage.getItem("itemData"));
    },
    addProduct: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
      };

      state.cartItems.push(newItem);
      updateLocalStorage(state.cartItems);
    },
    deleteProduct: (state, action) => {
      const id = { id: action.payload.id };
      state.cartItems.find((item) => item.id === id);
      state.cartItems.pop(id);
      updateLocalStorage(state.cartItems);
      console.log(state.cartItems);
    },
  },
});

// export Actions and Reducer -----------
export const { addProduct, getLocalStorageData } = cartSlice.actions;
export const { deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
