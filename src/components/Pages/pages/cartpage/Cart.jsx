import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteProduct } from "../../../../redux/slice/cartSlice";
import Subtotal from "./Subtotal";

function Cart() {
  // state ------
  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);

  const [newState, setNewState] = useState(cartState);

  const dispatch = useDispatch();

  // comportement ------
  const handledelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(newState));
    console.log(newState);
  };

  return (
    <CartStyled>
      <h1>The Goat Luxury</h1>
      <div className="container">
        <div className="cart-items">
          {cartState.map((item) => {
            return (
              <div className="item">
                <div className="picture-product">
                  <img src={item.image} alt="" />
                </div>
                <div className="name-product">
                  <p>{item.name}</p>
                </div>
                <div className="price-product">
                  <p>{item.price} €</p>
                </div>
                <div className="button-delete">
                  <button onClick={handledelete}>
                    <p>X</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Subtotal />
      </div>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;

  h1 {
    color: black;
  }

  .container {
    display: flex;
    flex-direction: row;
    height: 600px;
    width: 80%;

    .cart-items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 50%;
      border: 3px solid black;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      overflow-y: scroll;

      .item {
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
      }
    }
  }
`;

export default Cart;
