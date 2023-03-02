import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function MainHeart() {
  const arrayHeart = useSelector((state) => state.cartItems.heartItems);
  console.log(arrayHeart);
  return (
    <MainHeartStyled>
      <div className="heart-titel">
        <p>Favorite Item</p>
      </div>
      <div className="item-container">
        {arrayHeart.map((item) => {
          return (
            <div className="item-shape">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
    </MainHeartStyled>
  );
}

const MainHeartStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
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

  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;
    width: 100%;
    border: 1px solid grey;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow-y: scroll;

    .item-shape {
      display: flex;
      flex-direction: row;
      height: 30px;
      width: 90%;
      border: 1px solid black;

      p {
        color: black;
      }
    }
  }
`;

export default MainHeart;
