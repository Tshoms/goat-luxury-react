import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getLocalStorageData } from "../../../../redux/slice/cartSlice";
// import Navbar from "../../../../reusable-ui/navbar/Navbar";
import MainProductShow from "./mainproduct/MainProductShow";

function ProductShowCase() {
  // state -------
  const arrayCart = useSelector((state) => state.cartItems.cartItems);

  // localStorage / notif cart -----------
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("itemData")) {
      dispatch(getLocalStorageData());
    }
  }, []);

  const notifCart = arrayCart.length;
  return (
    <ProductShowCaseStyled>
      {/* <Navbar notifCart={notifCart} /> */}
      <MainProductShow />
    </ProductShowCaseStyled>
  );
}

const ProductShowCaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;

  @media (max-width: 1210px) {
    display: none;
  }
`;

export default ProductShowCase;
