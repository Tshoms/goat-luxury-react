import React from "react";
import styled from "styled-components";

function HeartPage() {
  return (
    <HeartStyled>
      <h1>HeartPage</h1>
    </HeartStyled>
  );
}

const HeartStyled = styled.div`
  h1 {
    color: black;
  }
`;

export default HeartPage;
