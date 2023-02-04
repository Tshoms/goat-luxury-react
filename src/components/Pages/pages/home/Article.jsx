import React from "react";
import styled from "styled-components";

function Article() {
  return (
    <ArticleStyled>
      <div className="delivery-info">
        <h2>Delivery fast</h2>
      </div>
    </ArticleStyled>
  );
}

const ArticleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  background-color: white;
  border: 1px solid green;
  .delivery-info {
    height: 100px;
    width: 100%;
    border: 1px solid white;
  }

  h2 {
    color: white;
  }
`;

export default Article;
