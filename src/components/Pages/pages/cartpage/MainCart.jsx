import React, { useEffect } from "react";
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

  const dispatch = useDispatch();

  //--------------
  const arrayPrice = cartState.map((item) => item.price);
  console.log(arrayPrice);
  const arrayQty = cartState.map((item) => item.quantity);
  console.log(arrayQty);
  const totalQtyPrice = arrayPrice * arrayQty;
  //--------------
  const totalPrice = arrayPrice.reduce((a, b) => a + b, 0);
  console.log(totalPrice);
  const totalQtyItem = arrayQty.reduce((a, b) => a + b, 0);
  console.log(totalQtyItem);

  //--------------

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
    // dispatch(deleteProductFromTotalPrice(PriceArray));
  };

  return (
    <MainCartStyled>
      <div className="cart-items">
        <div className="item-qty">
          <p>Item quantity - {totalQtyItem}</p>
        </div>
        <div className="show-item">
          {cartState.map((item) => {
            return (
              <ItemCart
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                totalQtyPrice={totalQtyPrice}
                quantity={item.quantity}
                onClick={() => handleDelete(item.id)}
              />
            );
          })}
        </div>
      </div>
      <Subtotal totalPrice={totalPrice} />
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
