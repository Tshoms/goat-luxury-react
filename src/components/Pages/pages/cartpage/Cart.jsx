import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Cart() {
  // state ------
  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);
  return (
    <CartStyled>
      <h1>Hello Cart page !!!</h1>
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
            </div>
          );
        })}
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
  .cart-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: 80%;
    border: 1px solid red;

    .item {
      display: flex;
      flex-direction: row;
      height: 95px;
      width: 50%;
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
    }
  }
`;

export default Cart;
