import React from "react";
import styled from "styled-components";
import blackwhite from "../../../../assets/images/blackwhite.jpg";
import MainHeart from "./MainHeart";

function HeartPage() {
  return (
    <HeartStyled>
      {/* <h1>HeartPage</h1> */}
      <MainHeart />
    </HeartStyled>
  );
}

const HeartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${blackwhite});
  background-size: cover;
  background-position: center;

  h1 {
    color: black;
  }
`;

export default HeartPage;
