import React from "react";
import styled from "styled-components";

function ProductShowCase() {
  return (
    <ProductShowCaseStyled>
      <h1>Hello Page produit !!!</h1>
    </ProductShowCaseStyled>
  );
}

const ProductShowCaseStyled = styled.div`
  h1 {
    color: black;
  }
`;

export default ProductShowCase;
