import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Subtotal from "./Subtotal";
import ItemCart from "./ItemCart";
import { getLocalStorageData } from "../../../../redux/slice/cartSlice";
import { deleteProduct } from "../../../../redux/slice/cartSlice.jsx";

function MainCart() {
  // state ------
  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);
  const NumberItem = cartState.length;
  const dispatch = useDispatch();
  const [newState, setNewState] = useState(cartState);

  //--------------
  const arrayPrice = cartState.map((item) => item.newprice);
  console.log(arrayPrice);
  //--------------
  const [qty, setQty] = useState(1);

  //--------------
  const totalPrice = arrayPrice.reduce((a, b) => a + b, 0);
  console.log(totalPrice);

  //--------------

  // localStorage -----------
  useEffect(() => {
    if (localStorage.getItem("itemData")) {
      dispatch(getLocalStorageData());
    }
  }, []);

  // comportement ------
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <MainCartStyled>
      <div className="cart-items">
        <div className="item-qty">
          <p>Item quantity - {NumberItem}</p>
        </div>
        <div className="show-item">
          {cartState.map((item) => {
            return (
              <ItemCart
                id={item.id}
                name={item.name}
                price={item.newprice}
                image={item.image}
                totalPrice={totalPrice}
                onClick={() => handleDelete(item.id)}
              />
            );
          })}
        </div>
      </div>
      <Subtotal totalPrice={totalPrice} qty={qty} arrayPrice={arrayPrice} />
    </MainCartStyled>
  );
}

const MainCartStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 80%;

  .cart-items {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    height: 100%;
    width: 60%;
    border: 3px solid black;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    /* overflow-y: scroll; */

    .item-qty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      width: 100%;
      background-color: black;

      p {
        color: white;
        font-size: 35px;
        font-family: "Playfair Display", serif;
      }
    }

    .show-item {
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow-y: scroll;
    }
  }
`;
export default MainCart;
