import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteProduct } from "../../../../redux/slice/cartSlice";
import Subtotal from "./Subtotal";
import ItemCart from "./ItemCart";

function Cart() {
  // state ------
  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);

  const [newState, setNewState] = useState(cartState);

  const dispatch = useDispatch();

  const arrayPrice = cartState.map((item) => item.price);
  const totalPrice = arrayPrice.reduce((a, b) => a + b, 0);

  // comportement ------
  const handledelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(newState));
    console.log(newState);
  };

  return (
    <CartStyled>
      <h1>The Goat Luxury</h1>
      <div className="container">
        <div className="cart-items">
          {cartState.map((item) => {
            return (
              <ItemCart
                name={item.name}
                price={item.price}
                image={item.image}
                onClick={handledelete}
              />
            );
          })}
        </div>
        <Subtotal totalPrice={totalPrice} />
      </div>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;

  h1 {
    color: black;
  }

  .container {
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
      width: 50%;
      border: 3px solid black;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      overflow-y: scroll;
    }
  }
`;

export default Cart;
