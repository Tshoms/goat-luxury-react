import React from "react";
import styled from "styled-components";

function DeliveryOrder() {
  return (
    <DeliveryOrderStyled>
      <h1>Order Number</h1>
    </DeliveryOrderStyled>
  );
}

const DeliveryOrderStyled = styled.div`
  h1 {
    color: black;
  }
`;

export default DeliveryOrder;
