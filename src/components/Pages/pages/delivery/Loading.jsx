import React from "react";
import styled from "styled-components";
import BarLoader from "react-spinners/BarLoader";

function Loading() {
  return (
    <LoadingStyled>
      <div className="loading-container">
        <div className="title-loading">
          <h3>The Goat Luxury</h3>
        </div>
        <BarLoader color="#000000" width="60%" />
      </div>
    </LoadingStyled>
  );
}

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: red; */

  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    height: 50%;
    width: 70%;

    .title-loading {
      height: 30%;
      width: 100%;

      h3 {
        font-size: 50px;
        color: black;
        font-family: "Playfair Display", serif;
        margin-bottom: 0px;
      }
    }
  }
`;
export default Loading;
