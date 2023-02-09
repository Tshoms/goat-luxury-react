import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

function MainRightSide({ price }) {
  return (
    <MainRightSideStyled>
      <div className="item-price">
        <h2> Price : {price}€</h2>
      </div>
      <div className="auth-info">
        <h2>authentic product</h2>
      </div>
      <div className="auth-logo">
        <GoVerified className="logo-auth" />
      </div>
      <div className="button-container">
        <form>
          <label htmlFor="quantity">
            <h3>Quantity</h3>
          </label>
          <div className="input-style">
            <input type="number" id="quantity" />
          </div>
          <div className="button-container">
            <PrimaryButton label="Buy" className="button-mainproduct" />
          </div>
        </form>
      </div>
    </MainRightSideStyled>
  );
}

const MainRightSideStyled = styled.div`
  height: 100%;
  width: 50%;
  border-top-right-radius: 20px;

  .item-price {
    height: 80px;
    width: 100%;
    border: 1px solid black;
    border-top-right-radius: 20px;

    h2 {
      color: black;
    }
  }

  .auth-info {
    height: 80px;
    width: 100%;
    border: 1px solid black;

    h2 {
      color: black;
    }
  }

  .auth-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 275px;
    width: 100%;
    border: 1px solid black;

    .logo-auth {
      font-size: 97px;
    }
  }

  .button-container {
    height: 204px;
    width: 100%;
    border: 1px solid black;
    border-bottom-right-radius: 20px;

    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      label {
        height: 25%;
        width: 100%;
        border: 1px solid black;

        h3 {
          font-size: 30px;
          font-family: "Playfair Display", serif;
        }
      }

      .input-style {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25%;
        width: 100%;
        border: 1px solid black;

        input {
          height: 25px;
          width: 50%;
        }
      }
      .button-container {
        height: 50%;
        width: 100%;

        .button-mainproduct {
          padding: 42px;
          border-radius: 0px;
          border-bottom-right-radius: 20px;

          label {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default MainRightSide;
