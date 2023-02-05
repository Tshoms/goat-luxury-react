import React, { useState } from "react";
import styled from "styled-components";
import { sneakers } from "../../../../fakedata/ProductsData";
import jordan from "../../../../assets/images/jordan-one-infrared.jpg";
// import headPicture from "../../../../assets/images/headpicture.jpg";

function Main() {
  // state -------------
  const [products, setProducts] = useState(sneakers);
  return (
    <MainStyled>
      {products.map((product) => {
        return (
          <div className="grid-items">
            <div key={product.id} className="img-products">
              <img src={jordan} alt={product.name} />
            </div>
            <div className="title-products">{product.name}</div>
          </div>
        );
      })}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 15px;
  height: auto;
  margin: 30px auto;
  max-width: 1500px;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: center;

  .grid-items {
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
  }
`;

export default Main;
