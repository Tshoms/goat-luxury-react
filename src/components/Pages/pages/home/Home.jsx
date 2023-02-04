import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Head from "./Head";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import Article from "./Article";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  return (
    <HomeStyled>
      <Navbar userName={userName} />
      <Head />
      <Article />
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;

export default Home;
