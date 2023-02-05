import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Head from "./Head";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import Article from "./Article";
import Main from "./Main";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  return (
    <HomeStyled>
      <Navbar userName={userName} />
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
