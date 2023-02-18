import React from "react";
import styled from "styled-components";

function ItemCart({ name, price, image, onClick }) {
  return (
    <ItemStyled>
      <div className="picture-product">
        <img src={image} alt="" />
      </div>
      <div className="name-product">
        <p>{name}</p>
      </div>
      <div className="price-product">
        <p>{price} €</p>
      </div>
      <div className="button-delete">
        <button onClick={onClick}>
          <p>X</p>
        </button>
      </div>
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 125px;
  width: 80%;
  background-color: #ece9e9;
  border-radius: 10px;
  margin-bottom: 15px;

  .picture-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 45%;

    img {
      height: 90%;
      width: 70%;
      border-radius: 10px;
    }
  }

  .name-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;

    p {
      font-size: 17px;
      font-family: "Playfair Display", serif;
    }
  }

  .price-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;

    p {
      font-size: 20px;
      font-family: "Playfair Display", serif;
    }
  }
  .button-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    button {
      height: 100%;
      width: 100%;
      background-color: red;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border: none;

      p {
        font-size: 15px;
        color: white;
      }
    }

    p {
      color: white;
    }
  }
`;

export default ItemCart;
