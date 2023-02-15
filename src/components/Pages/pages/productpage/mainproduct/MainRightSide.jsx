import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { sneakers } from "../../../../../fakedata/ProductsData.jsx";
import { addProduct } from "../../../../../redux/slice/cartSlice.jsx";
function MainRightSide({ price }) {
  // state --------
  const { id } = useParams();
  const items = sneakers.find((item) => item.id === parseInt(id));

  const initialState = {
    id: items.id,
    name: items.name,
    price: items.price,
  };

  const [newData, setNewData] = useState(initialState);
  const dispatch = useDispatch();

  console.log(newData);

  const [nbSneaker, setNbSneakers] = useState(1);

  // comportement --------
  const handleclick = (e) => {
    e.preventDefault();
    dispatch(addProduct(newData));
  };

  const cartState = useSelector((state) => state.cartItems);
  console.log(cartState);

  const handlechange = (event) => {
    setNbSneakers(Number(event.target.value));
  };

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
            <input
              type="number"
              id="quantity"
              value={nbSneaker}
              onChange={handlechange}
            />
          </div>
          <div className="button-container">
            <PrimaryButton
              label="Buy"
              className="button-mainproduct"
              onClick={handleclick}
            />
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
          width: 10%;
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
