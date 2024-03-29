import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { AiFillHeart } from "react-icons/ai";
// import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  addHeartProduct,
  getLocalStorageHeart,
} from "../redux/slice/cartSlice";
import { toast } from "react-toastify";

function Card({ id, name, image, price }) {
  // state ------
  const [color, setColor] = useState("white");

  const favArray = useSelector((state) => state.cartItems.heartItems);
  // const notifHeart = favArray.length;

  // comportement --------
  const initialState = {
    id: id,
    name: name,
    image: image,
    price: price,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("HeartData")) {
      dispatch(getLocalStorageHeart());
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const arrayCopy = favArray.find((e) => e.id === initialState.id);
    if (arrayCopy) {
      toast.error("Sorry Item add before...");
    } else {
      setColor("red");
      dispatch(addHeartProduct(initialState));
      toast.success(`add to wishlist 💝 !`);
    }
  };

  return (
    <CardStyled>
      <div className="img-products">
        <img src={image} alt={name} />
      </div>
      <div className="title-products">{name}</div>
      <Link to={{ pathname: `/produit/${id}` }}>
        <div className="button-container">
          <PrimaryButton label="info" className="button-card" />
        </div>
      </Link>
      <div className="price">
        <span>{price} $</span>
      </div>
      <div className="favorite">
        <AiFillHeart
          className="favorite-heart"
          style={{ color: color }}
          onClick={handleClick}
        />
      </div>

      {/* <div className="add">
        <IoIosAddCircle className="add-icon" />
      </div> */}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  border-radius: 12px;
  /* border: 2px solid black; */
  box-shadow: 0 0 7px rgba(18, 18, 18, 0.5);
  position: relative;

  .img-products {
    height: 70%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* border: 1px solid black; */

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      object-fit: cover;

      /* object-fit: contain; */
    }
  }

  .title-products {
    font-family: "Playfair Display", serif;
    height: 10%;
  }

  .button-container {
    height: 20%;

    .button-card {
      padding: 9px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  .price {
    display: flex;
    justify-content: center;
    height: 30px;
    width: 80px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    position: absolute;

    span {
      font-family: "Playfair Display", serif;
      color: black;
    }
  }

  .favorite {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 50px;
    color: transparent;
    border-radius: 10px;
    position: absolute;
    right: 0;
    cursor: pointer;

    .favorite-heart {
      font-size: 23px;
    }
  }
  /* .add {
    height: 30px;
    width: 50px;
    position: absolute;
    top: 40px;
    right: 0;
    cursor: pointer;

    .add-icon {
      font-size: 25px;
      color: black;
    }
  } */
`;

export default Card;
