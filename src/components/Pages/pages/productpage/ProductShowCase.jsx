import React from "react";
import styled from "styled-components";
import Navbar from "../../../../reusable-ui/navbar/Navbar";
import MainProductShow from "./MainProductShow";

function ProductShowCase() {
  return (
    <ProductShowCaseStyled>
      <Navbar />
      <MainProductShow />
    </ProductShowCaseStyled>
  );
}

const ProductShowCaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
`;

export default ProductShowCase;
