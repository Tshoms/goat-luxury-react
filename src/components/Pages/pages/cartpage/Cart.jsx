import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Cart() {
  // state ------
  const Item = useSelector((state) => console.log(state));
  return <CartStyled>Hello Cart page !!!</CartStyled>;
}

const CartStyled = styled.div``;

export default Cart;
