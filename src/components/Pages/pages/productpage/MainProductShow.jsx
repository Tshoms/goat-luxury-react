import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sneakers } from "../../../../fakedata/ProductsData";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";

function MainProductShow() {
  // state ------------
  const [product, setProduct] = useState(sneakers);
  const { id } = useParams();

  const items = product.findIndex((item) => {
    return item.id === parseInt(id);
  });
  console.log(items);

  // comportement  ------------

  return (
    <MainProductShowStyled>
      <div className="item-info">
        <div className="item-name">
          <h2>{product[items].name}</h2>
        </div>
        <div className="item-picture">
          <img src={product[items].image} alt={product[items].name} />
        </div>
        <div className="item-desciption">
          <h3>introduce</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="process-item">
        <div className="item-price">
          <h2>{product[items].price}€</h2>
        </div>
        <div className="auth-info">
          <h2>authentic product</h2>
        </div>
        <div className="auth-logo">
          <GoVerified className="logo-auth" />
        </div>
        <div className="button-container"></div>
      </div>
    </MainProductShowStyled>
  );
}

const MainProductShowStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 54%;
  width: 80%;
  background-color: white;
  margin: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid black;

  .item-info {
    height: 100%;
    width: 50%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid black;
    .item-name {
      height: 81px;
      width: 100%;
      border: 1px solid black;
      border-top-left-radius: 20px;

      h2 {
        color: black;
      }
    }

    .item-picture {
      height: 300px;
      width: 100%;
      border: 1px solid black;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .item-desciption {
      height: 260px;
      width: 100%;

      h3 {
        font-family: "Playfair Display", serif;
        font-size: 40px;
      }
    }
  }

  .process-item {
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
    }
  }
`;

export default MainProductShow;
