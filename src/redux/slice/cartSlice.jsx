import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  heartItems: [],
  arrayUser: [],
};

const updateLocalStorageUser = (newUserArray) => {
  localStorage.setItem("userData", JSON.stringify(newUserArray));
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
    getLocalStorageUser: (state) => {
      state.arrayUser = JSON.parse(localStorage.getItem("userData"));
    },
    getLocalStorageData: (state) => {
      state.cartItems = JSON.parse(localStorage.getItem("itemData"));
    },
    getLocalStorageHeart: (state) => {
      state.heartItems = JSON.parse(localStorage.getItem("HeartData"));
    },

    getUserName: (state, action) => {
      const user = { name: action.payload.name };
      console.log(user);
      state.arrayUser.push(user);

      updateLocalStorageUser(state.arrayUser);
    },
    deleteUserName: (state) => {
      state.arrayUser.splice(0, state.arrayUser.length);

      updateLocalStorageUser(state.arrayUser);
    },

    addProduct: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (obj) => obj.id === action.payload.id
      );

      const price = action.payload.price;

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].price += price;
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

      state.heartItems.push(newItem);
      updateLocalStorageHeart(state.heartItems);
    },
    getQuantity: (state, action) => {
      const qtyTotal = {
        id: action.payload.id,
        price: action.payload.price,
      };

      state.cartItems.push(qtyTotal);
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((el) => el.id !== id);

      updateLocalStorage(state.cartItems);
    },
    deleteHeartProduct: (state, action) => {
      const id = action.payload;
      state.heartItems = state.heartItems.filter((item) => item.id !== id);

      updateLocalStorageHeart(state.heartItems);
    },
    cleanArray: (state, action) => {
      state.cartItems.splice(0, state.cartItems.length);

      updateLocalStorage(state.cartItems);
    },
  },
});

// export Actions and Reducer -----------
export const {
  getUserName,
  addProduct,
  getLocalStorageUser,
  getLocalStorageData,
  getLocalStorageHeart,
  deleteUserName,
  deleteProduct,
  getQuantity,
  cleanArray,
  addHeartProduct,
  deleteHeartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
