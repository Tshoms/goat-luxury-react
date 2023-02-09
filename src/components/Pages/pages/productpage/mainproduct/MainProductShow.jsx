import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sneakers } from "../../../../../fakedata/ProductsData";
import styled from "styled-components";
import MainRightSide from "./MainRightSide";

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
      <MainRightSide price={product[items].price} />
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
`;

export default MainProductShow;
