import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const addItem = {
        id: action.payload,
        done: false,
      };
      state.push(addItem);
    },
    deletProduct: (state, action) => {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

// store ---------
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
