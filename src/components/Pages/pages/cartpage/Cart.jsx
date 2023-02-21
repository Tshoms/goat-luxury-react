import React from "react";
import styled from "styled-components";
import MainCart from "./MainCart";

function Cart() {
  return (
    <CartStyled>
      <h1>The Goat Luxury</h1>
      <MainCart />
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
    border: 1px solid red;

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
  }
`;

export default Cart;
