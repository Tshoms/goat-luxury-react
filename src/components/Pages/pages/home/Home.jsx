import React, { useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Head from "./Head";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import Article from "./Article";
import Main from "./Main";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorageData } from "../../../../redux/slice/cartSlice";
import Footer from "../../../../reusable-ui/Footer.jsx";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  const dispatch = useDispatch();

  const arrayCart = useSelector((state) => state.cartItems.cartItems);
  const numberQty = arrayCart.map((item) => item.quantity);
  const notifQty = numberQty.reduce((a, b) => a + b, 0);

  // -------

  const favArray = useSelector((state) => state.cartItems.heartItems);
  const notifHeart = favArray.length;

  // localStorage -----------

  useEffect(() => {
    if (localStorage.getItem("itemData")) {
      dispatch(getLocalStorageData());
    }
  }, []);

  return (
    <HomeStyled>
      <Navbar
        userName={userName}
        notifCart={notifQty}
        notifHeart={notifHeart}
      />
      <Head />
      <Article />
      <Main />
      <Footer />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 1210px) {
    display: none;
  }
`;

export default Home;
