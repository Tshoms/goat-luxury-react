import React from "react";
import styled from "styled-components";

function MainHeart() {
  return (
    <MainHeartStyled>
      <div className="heart-titel">
        <p>Favorite Item</p>
      </div>
    </MainHeartStyled>
  );
}

const MainHeartStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 3px solid red;

  .heart-titel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    background-color: pink;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    p {
      color: red;
      font-size: 40px;
      font-family: "Playfair Display", serif;
    }
  }
`;

export default MainHeart;