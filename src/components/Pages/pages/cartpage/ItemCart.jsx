import React from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";

function ItemCart({ id, name, price, image, quantity, onClick }) {
  // state --------

  // comportement -------

  return (
    <ItemStyled key={id}>
      <div className="picture-product">
        <img src={image} alt="" />
      </div>
      <div className="name-product">
        <p>{name}</p>
      </div>
      <div className="qty">
        <div className="qty-title">
          <p>Qty</p>
        </div>
        <div className="qty-button">
          {/* <TbCircleMinus className="icon"  /> */}
          <span>{quantity}</span>
          {/* <TbCirclePlus className="icon"  /> */}
        </div>
      </div>
      <div className="price-product">
        <p>{price} €</p>
      </div>
      <div className="button-delete">
        <button onClick={onClick}>
          <BsTrashFill className="icon" />
        </button>
      </div>
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 95px;
  width: 95%;
  background-color: #ece9e9;
  border-radius: 10px;
  margin-bottom: 15px;

  .picture-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 35%;
    /* border: 1px solid black; */

    img {
      height: 90%;
      width: 95%;
      border-radius: 10px;
    }
  }

  .name-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 35%;

    p {
      font-size: 17px;
      font-family: "Playfair Display", serif;
    }
  }

  .qty {
    /* display: none; */
    flex-direction: column;
    height: 100%;
    width: 20%;
    /* border: 1px solid black; */

    .qty-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
      width: 100%;
    }

    .qty-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      height: 50%;
      width: 100%;

      .icon {
        font-size: 35px;
        color: black;
      }

      span {
        font-size: 30px;
        margin: 10px;
      }
    }
  }

  .price-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    /* border: 1px solid black; */

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
    width: 20%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    button {
      height: 100%;
      width: 100%;
      background-color: black;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border: none;

      .icon {
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
