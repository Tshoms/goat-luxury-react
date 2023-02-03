import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Head from "./Head";
import Navbar from "../../../../reusable-ui/navbar/Navbar";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  return (
    <HomeStyled>
      <Navbar />
      <Head />
      <h1>Hello welcome to Home !!!</h1>
      <span>{userName}</span>
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;

export default Home;
