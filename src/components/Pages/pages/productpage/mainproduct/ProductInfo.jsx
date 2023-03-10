import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { sneakers } from "../../../../../fakedata/ProductsData.jsx";
import { addProduct } from "../../../../../redux/slice/cartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

function ProductInfo({ name, image, price }) {
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
    setNewData(newData);
    toast.success("add to basket !");
  };

  const cartState = useSelector((state) => state.cartItems.cartItems);
  console.log(cartState);

  return (
    <MainLeftSideStyled>
      <div className="item-name">
        <h2>{name}</h2>
      </div>
      <div className="item-picture">
        <img src={image} alt={name} />
      </div>
      <div className="price-container">
        <h3>Price : {price} €</h3>
      </div>
      <div className="add-cart">
        <div className="add-container">
          <h3>Add to cart</h3>
        </div>
        <div className="button">
          <PrimaryButton
            label="add"
            className="button-mainproduct"
            onClick={handleclick}
          />
        </div>
      </div>
    </MainLeftSideStyled>
  );
}

const MainLeftSideStyled = styled.div`
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* border: 1px solid black; */
  .item-name {
    height: 81px;
    width: 100%;
    /* border: 1px solid black; */
    border-top-left-radius: 20px;

    h2 {
      color: black;
    }
  }

  .item-picture {
    height: 300px;
    width: 100%;
    /* border: 1px solid black; */
    img {
      height: 100%;
      width: 100%;
    }
  }

  .price-container {
    height: 60px;
    width: 100%;
    /* border: 1px solid red; */

    h3 {
      font-family: "Playfair Display", serif;
      font-size: 40px;
    }
  }

  .add-cart {
    height: 185px;
    width: 100%;
    /* border: 1px solid red; */

    .add-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;

      h3 {
        font-family: "Playfair Display", serif;
        font-size: 30px;
      }
    }

    .button {
      height: 105px;
      /* border: 1px solid green; */

      .button-mainproduct {
        padding: 47px;
        border-radius: 0px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;

        label {
          font-size: 20px;
        }
      }
    }
  }
`;

export default ProductInfo;
