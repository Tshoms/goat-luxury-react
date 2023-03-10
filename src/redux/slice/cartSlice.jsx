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
        newprice: action.payload.newprice,
      };
      console.log(newItem);
      state.cartItems.push(newItem);
      updateLocalStorage(state.cartItems);
    },
    getQuantity: (state, action) => {
      const qtyTotal = {
        id: action.payload.id,
        price: action.payload.price,
      };

      console.log(qtyTotal);
      state.cartItems.push(qtyTotal);
    },
    deleteProduct: (state, action) => {
      const id = { id: action.payload.id };
      state.cartItems.find((item) => item.id === id);
      state.cartItems.pop(id);
      updateLocalStorage(state.cartItems);
      console.log(state.cartItems);
    },
    cleanArray: (state, action) => {
      state.cartItems.splice(0, state.cartItems.length);
      console.log(state.cartItems);
      updateLocalStorage(state.cartItems);
    },
  },
});

// export Actions and Reducer -----------
export const {
  addProduct,
  getLocalStorageData,
  deleteProduct,
  getQuantity,
  cleanArray,
} = cartSlice.actions;
export default cartSlice.reducer;
