import React, { useRef, useState } from "react";

import { useParams } from "react-router-dom";
import { sneakers } from "../../../../../fakedata/ProductsData";
import styled from "styled-components";
import MainRightSide from "./MainRightSide";
import MainLeftSide from "./MainLeftSide";

function MainProductShow() {
  // state ------------
  const [product, setProduct] = useState(sneakers);
  const { id } = useParams();

  const items = product.findIndex((item) => {
    return item.id === parseInt(id);
  });

  // comportement  ------------

  return (
    <MainProductShowStyled>
      <MainLeftSide name={product[items].name} image={product[items].image} />
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
  margin: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid black;
`;

export default MainProductShow;
