import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteHeartProduct } from "../../../../redux/slice/cartSlice";
import { toast } from "react-toastify";
import { getLocalStorageHeart } from "../../../../redux/slice/cartSlice.jsx";

function MainHeart() {
  // state ------------
  const arrayHeart = useSelector((state) => state.cartItems.heartItems);
  console.log(arrayHeart);

  const notifArray = arrayHeart.length;
  // console.log(notifArray);

  const [newArray, setNewArray] = useState(arrayHeart);

  const dispatch = useDispatch();

  // comportement ------------
  const handleClick = (id) => {
    dispatch(deleteHeartProduct(id));
    toast.error("delete item 🗑 !");
  };

  useEffect(() => {
    if (localStorage.getItem("HeartData")) {
      dispatch(getLocalStorageHeart());
    }
  }, []);

  return (
    <MainHeartStyled>
      <div className="heart-titel">
        <p>Wishlist - {notifArray} </p>
      </div>
      <div className="item-container">
        {arrayHeart.map((item) => {
          return (
            <div key={item.id} className="item-shape">
              <div className="picture-item">
                <img src={item.image} />
              </div>
              <div className="title-item">
                <p>{item.name}</p>
              </div>
              <div className="price-item">
                <p>{item.price} €</p>
              </div>
              <div className="button" onClick={() => handleClick(item.id)}>
                <BsTrashFill className="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </MainHeartStyled>
  );
}

const MainHeartStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 60%;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 3px solid white;

  .heart-titel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 100%;
    background-color: black;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    p {
      color: white;
      font-size: 40px;
      font-family: "Playfair Display", serif;
    }
  }

  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85%;
    width: 100%;
    border: 1px solid grey;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow-y: scroll;

    .item-shape {
      display: flex;
      flex-direction: row;
      height: 90px;
      width: 90%;
      border: 2px solid black;

      margin-top: 7px;
      margin-bottom: 7px;

      p {
        color: black;
        font-family: "Playfair Display", serif;
      }

      .picture-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 20%;

        img {
          height: 90%;
          width: 90%;
        }
      }

      .title-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 35%;
        /* border: 1px solid black; */

        p {
          color: black;
          font-family: "Playfair Display", serif;
          font-size: 25px;
        }
      }

      .price-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 20%;
        /* border: 1px solid green; */

        p {
          color: black;
          font-family: "Playfair Display", serif;
          font-size: 25px;
        }
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 25%;
        background-color: black;

        .icon {
          color: white;
        }
      }
    }
  }
`;

export default MainHeart;
