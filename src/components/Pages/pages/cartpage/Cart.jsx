import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Cart() {
  // state ------
  const cartState = useSelector((state) => state.cart);
  console.log(cartState);
  return (
    <CartStyled>
      <h1>Hello Cart page !!!</h1>
      <div className="cart-items">
        {cartState.map((item) => {
          return <div className="item">{item.id}</div>;
        })}
      </div>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;

  h1 {
    color: black;
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 80%;
    border: 1px solid red;

    .item {
      height: 50px;
      width: 100%;
      background-color: grey;
      border-radius: 20px;
    }
  }
`;

export default Cart;
