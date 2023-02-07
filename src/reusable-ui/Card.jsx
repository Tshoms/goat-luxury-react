import React from "react";
import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
function Card({ id, name, image, price }) {
  return (
    <CardStyled>
      <div key={id} className="img-products">
        <img src={image} alt={name} />
      </div>
      <div className="title-products">{name}</div>
      <div className="button-container">
        <PrimaryButton label="buy" className="button-card" />
      </div>
      <div className="price">
        <span>{price} $</span>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  border-radius: 12px;
  border: 2px solid black;
  position: relative;

  .img-products {
    height: 70%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid black;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      object-fit: cover;

      /* object-fit: contain; */
    }
  }

  .title-products {
    font-family: "Playfair Display", serif;
    height: 10%;
  }

  .button-container {
    height: 20%;

    .button-card {
      padding: 9px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  .price {
    display: flex;
    justify-content: center;
    height: 30px;
    width: 80px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    position: absolute;

    span {
      font-family: "Playfair Display", serif;
      color: black;
    }
  }
`;

export default Card;
