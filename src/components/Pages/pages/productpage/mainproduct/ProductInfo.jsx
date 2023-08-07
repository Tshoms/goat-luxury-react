import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
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

  const initialState = {
    id: items.id,
    name: items.name,
    price: items.price,
    image: items.image,
  };
  initialState.quantity = nbSneaker;

  //----------------------
  const [newData, setNewData] = useState(initialState);
  const dispatch = useDispatch();

  //comportement --------
  const addMore = (e) => {
    e.preventDefault();
    setNbSneakers(nbSneaker + 1);
  };

  const lowQty = (e) => {
    e.preventDefault();
    if (nbSneaker === 1) {
      toast.error("you have one quantity...");
    } else {
      setNbSneakers(nbSneaker - 1);
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(addProduct(newData));
    setNewData(newData);
    toast.success("add to basket !");
  };

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
      <div className="quantity">
        <div className="more" onClick={addMore}>
          <AiOutlinePlusCircle className="icon" />
        </div>
        <div className="qty-container">
          <p>Quantity</p>
          <span>{nbSneaker}</span>
        </div>
        <div className="low" onClick={lowQty}>
          <AiOutlineMinusCircle className="icon" />
        </div>
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
  border: 3px solid black;
  .item-name {
    height: 10%;
    width: 100%;
    /* border: 1px solid black; */

    h2 {
      color: black;
    }
  }

  .item-picture {
    height: 40%;
    width: 100%;
    /* border: 1px solid black; */
    img {
      height: 100%;
      width: 100%;
    }
  }

  .price-container {
    height: 10%;
    width: 100%;
    /* border: 1px solid red; */

    h3 {
      font-family: "Playfair Display", serif;
      font-size: 40px;
    }
  }

  .quantity {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    /* border: 1px solid red; */

    .qty-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 10%;
      /* border: 1px solid green; */

      p {
        font-family: "Playfair Display", serif;
        font-size: 15px;
      }

      span {
        font-size: 30px;
      }
    }
    .more {
      display: none;
      height: 100%;
      width: 20%;
      /* border: 1px solid red; */
    }

    .low {
      display: none;
      height: 100%;
      width: 20%;
      /* border: 1px solid red; */
    }

    .icon {
      font-size: 30px;
    }
  }

  .add-cart {
    height: 10%;
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
      height: 10%;
      /* border: 1px solid green; */

      .button-mainproduct {
        padding: 30px;
        border-radius: 0px;

        label {
          font-size: 20px;
        }
      }
    }
  }
`;

export default ProductInfo;
