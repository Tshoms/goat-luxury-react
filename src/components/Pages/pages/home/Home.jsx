import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Head from "./Head";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import Article from "./Article";
import Main from "./Main";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorageData } from "../../../../redux/slice/cartSlice";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");

  const arrayCart = useSelector((state) => state.cartItems.cartItems);

  // localStorage -----------
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("itemData")) {
      dispatch(getLocalStorageData());
    }
  }, []);

  const notifCart = arrayCart.length;
  console.log(notifCart);

  return (
    <HomeStyled>
      <Navbar userName={userName} notifCart={notifCart} />
      <Head />
      <Article />
      <Main />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export default Home;
