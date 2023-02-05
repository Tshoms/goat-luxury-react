import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

function Article() {
  return (
    <ArticleStyled>
      <div className="delivery-info">
        <div className="button-container">
          <PrimaryButton className="primary-article" label="Clothes" />
        </div>
        <div className="button-container">
          <PrimaryButton className="primary-article" label="Sneakers" />
        </div>
        <div className="button-container">
          <PrimaryButton className="primary-article" label="Bag" />
        </div>
        <div className="button-container">
          <PrimaryButton className="primary-article" label="Jewelry" />
        </div>
      </div>
    </ArticleStyled>
  );
}

const ArticleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: white;
  border: 1px solid green;
  .delivery-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 100px;
    width: 60%;
    /* border: 1px solid red; */
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
      width: 160px;

      .primary-article {
        padding: 15px;
        span {
          font-family: "Playfair Display", serif;
          font-size: 25px;
        }
      }
    }
  }

  h2 {
    color: white;
  }
`;

export default Article;
