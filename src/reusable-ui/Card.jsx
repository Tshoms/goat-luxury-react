import React from "react";
import styled from "styled-components";

function Card({ id, name, image }) {
  return (
    <CardStyled>
      <div key={id} className="img-products">
        <img src={image} alt={name} />
      </div>
      <div className="title-products">{name}</div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  border-radius: 12px;
  border: 2px solid black;

  .img-products {
    height: 70%;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid black;

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
    height: 10%;
  }
`;

export default Card;
