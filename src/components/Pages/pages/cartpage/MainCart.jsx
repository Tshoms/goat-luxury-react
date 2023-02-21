import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Subtotal from "./Subtotal";
import ItemCart from "./ItemCart";
import {
  deleteProduct,
  getLocalStorageData,
} from "../../../../redux/slice/cartSlice";

function MainCart() {
  // state ------
  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);
  const dispatch = useDispatch();

  const [newState, setNewState] = useState(cartState);

  const arrayPrice = cartState.map((item) => item.price);
  const totalPrice = arrayPrice.reduce((a, b) => a + b, 0);
  console.log(totalPrice);

  const qtyPrice = useSelector((state) => state.cartItems.totalQtyPrice);
  console.log(qtyPrice);

  // localStorage -----------
  useEffect(() => {
    if (localStorage.getItem("itemData")) {
      dispatch(getLocalStorageData());
    }
  }, []);

  // comportement ------
  const handledelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(newState));
    console.log(newState);
  };
  return (
    <MainCartStyled>
      <div className="cart-items">
        {cartState.map((item) => {
          return (
            <ItemCart
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              totalPrice={totalPrice}
              onClick={handledelete}
            />
          );
        })}
      </div>
      <Subtotal totalPrice={totalPrice} />
    </MainCartStyled>
  );
}

const MainCartStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 80%;

  .cart-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 60%;
    border: 3px solid black;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    overflow-y: scroll;
  }
`;
export default MainCart;
