import React, { useState } from "react";
import { toast } from "react-toastify";
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
  // qty --------------
  const [nbSneaker, setNbSneakers] = useState(1);
  const qty = nbSneaker;
  console.log(qty);
  const itemPrice = items.price;
  console.log(itemPrice);
  const newPrice = qty * itemPrice;
  console.log(newPrice);

  const initialState = {
    id: items.id,
    name: items.name,
    price: items.price,
    image: items.image,
  };

  initialState.newprice = newPrice;
  console.log(initialState);
  //----------------------
  const [newData, setNewData] = useState(initialState);
  console.log(newData);
  const dispatch = useDispatch();

  //comportement --------
  const handlechange = (e) => {
    setNbSneakers(Number(e.target.value));
  };

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(addProduct(newData));
    toast.success("ajouter au panier !");
  };

  const cartState = useSelector((state) => state.cartItems);
  console.log(cartState);

  return (
    <MainRightSideStyled>
      <div className="item-price">
        <h2> unitaire : {price}€</h2>
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
            <h3>add to cart</h3>
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
              label="add"
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
        display: none;
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
        height: 100%;
        width: 100%;
        /* border: 1px solid red; */

        .button-mainproduct {
          padding: 71px;
          border-radius: 0px;
          border-bottom-right-radius: 20px;

          label {
            font-size: 20px;
          }
        }
      }
    }
  }

  .Toastify__toast {
    text-decoration: none;
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    color: white;
    background-color: green;
    border-color: green;
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    color: white;
    background-color: red;
    border-color: red;
  }
`;

export default MainRightSide;
