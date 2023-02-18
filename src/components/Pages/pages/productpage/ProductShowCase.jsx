import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import MainProductShow from "./mainproduct/MainProductShow";

function ProductShowCase() {
  // state -------
  const arrayCart = useSelector((state) => state.cartItems.cartItems);

  const notifCart = arrayCart.length;
  return (
    <ProductShowCaseStyled>
      <Navbar notifCart={notifCart} />
      <MainProductShow />
    </ProductShowCaseStyled>
  );
}

const ProductShowCaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
`;

export default ProductShowCase;
