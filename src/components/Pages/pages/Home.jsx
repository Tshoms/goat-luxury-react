import React from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

function Home() {
  // state --------
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("userName");
  return (
    <HomeStyled>
      <h1>Hello welcome to Home !!!</h1>
      <span>{userName}</span>
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;

export default Home;
