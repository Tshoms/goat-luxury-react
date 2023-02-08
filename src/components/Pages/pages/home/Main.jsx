import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sneakers } from "../../../../fakedata/ProductsData";
import Card from "../../../../reusable-ui/Card";

function Main() {
  // state -------------
  const [products, setProducts] = useState(sneakers);
  return (
    <MainStyled>
      {products.map(({ id, name, image, price }) => {
        return (
          <Link to={{ pathname: `/produit/${id}` }}>
            <Card id={id} image={image} name={name} price={price} />
          </Link>
        );
      })}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 15px;
  height: auto;
  margin: 30px auto;
  max-width: 1500px;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: center;
`;

export default Main;
