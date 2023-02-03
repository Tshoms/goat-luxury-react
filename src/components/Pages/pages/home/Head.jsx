import React from "react";
import styled from "styled-components";
import headPicture from "../../../../assets/picture/headpicture.jpg";

function Head() {
  return (
    <HeadStyled>
      <h1>The Goat Luxury</h1>
      <h2>Our store</h2>
    </HeadStyled>
  );
}

const HeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 580px;
  width: 100%;
  /* border: 1px solid red; */
  background: url(${headPicture});
  background-size: cover;
  background-position: center;
`;

export default Head;
