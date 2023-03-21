import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  heartItems: [],
};

const updateLocalStorage = (newItemArray) => {
  localStorage.setItem("itemData", JSON.stringify(newItemArray));
};

const updateLocalStorageHeart = (newHeartArray) => {
  localStorage.setItem("HeartData", JSON.stringify(newHeartArray));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    getLocalStorageData: (state) => {
      state.cartItems = JSON.parse(localStorage.getItem("itemData"));
    },
    getLocalStorageHeart: (state) => {
      state.heartItems = JSON.parse(localStorage.getItem("HeartData"));
    },

    addProduct: (state, action) => {
      // const newItem = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   price: action.payload.price,
      //   image: action.payload.image,
      //   newprice: action.payload.newprice,
      // };
      // console.log(newItem);
      // state.cartItems.push(newItem);
      const itemIndex = state.cartItems.findIndex(
        (obj) => obj.id === action.payload.id
      );
      console.log(itemIndex);

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      updateLocalStorage(state.cartItems);
    },
    addHeartProduct: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
      };
      console.log(newItem);
      state.heartItems.push(newItem);
      updateLocalStorageHeart(state.heartItems);
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
      const id = action.payload;
      state.cartItems = state.cartItems.filter((el) => el.id !== id);

      updateLocalStorage(state.cartItems);
      console.log(state.cartItems);
    },
    deleteHeartProduct: (state, action) => {
      const id = action.payload;
      state.heartItems = state.heartItems.filter((item) => item.id !== id);

      updateLocalStorageHeart(state.heartItems);
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
  getLocalStorageHeart,
  deleteProduct,
  getQuantity,
  cleanArray,
  addHeartProduct,
  deleteHeartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
