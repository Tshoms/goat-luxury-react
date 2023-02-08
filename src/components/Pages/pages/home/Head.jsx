import React from "react";
import styled from "styled-components";
import headPicture from "../../../../assets/images/headpicture.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Head() {
  return (
    <HeadStyled>
      <h1>The Goat Luxury</h1>
      <h2>Our store</h2>
      <div className="scroll">
        <BsFillArrowDownCircleFill className="scroll-icon" />
      </div>
    </HeadStyled>
  );
}

const HeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 100%;
  /* border: 1px solid red; */
  background: url(${headPicture});
  background-size: cover;
  background-position: center;

  .scroll {
    display: flex;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    margin-top: 15px;

    .scroll-icon {
      color: white;
      font-size: 40px;
    }
  }
`;

export default Head;
