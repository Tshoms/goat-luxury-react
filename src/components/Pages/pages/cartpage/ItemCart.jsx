import React, { useState } from "react";
import styled from "styled-components";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";

function ItemCart({ id, name, price, image, onClick }) {
  // state --------
  const [qty, setQty] = useState(1);
  const totalPriceItem = qty * price;
  // comportement -------

  const addQty = (e) => {
    e.preventDefault();
    setQty(qty + 1);
    console.log(qty);
    // dispatch(getQuantity(initialState));
  };

  const lowQty = (e) => {
    e.preventDefault();
    setQty(qty - 1);
  };

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
          <TbCircleMinus className="icon" onClick={lowQty} />
          <span>{qty}</span>
          <TbCirclePlus className="icon" onClick={addQty} />
        </div>
      </div>
      <div className="price-product">
        <p>{totalPriceItem} €</p>
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
  width: 95%;
  background-color: #ece9e9;
  border-radius: 10px;
  margin-bottom: 15px;

  .picture-product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
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
    display: none;
    flex-direction: column;
    height: 100%;
    width: 30%;
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
    width: 40%;

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
