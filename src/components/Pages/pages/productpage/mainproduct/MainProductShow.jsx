import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { sneakers } from "../../../../../fakedata/ProductsData";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";

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
      <ProductInfo
        name={product[items].name}
        image={product[items].image}
        price={product[items].price}
      />
    </MainProductShowStyled>
  );
}

const MainProductShowStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 40%;
  background-color: white;
  margin: 40px;

  /* border: 1px solid black; */
  box-shadow: 0 0 7px rgba(20, 20, 20, 0.5);
`;

export default MainProductShow;
