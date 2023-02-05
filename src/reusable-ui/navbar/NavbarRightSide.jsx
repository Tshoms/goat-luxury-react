import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Profile from "../Profile";

function NavbarRightSide({ userName }) {
  return (
    <NavbarRightSideStyled>
      <Profile userName={userName} />
      <div className="cartlogo">
        <FiShoppingCart className="icon" />
      </div>
      <div className="heartlogo">
        <FaRegHeart className="icon-heart" />
      </div>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */

  .cartlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    /* border: 1px solid orange; */
    .icon {
      color: black;
      font-size: 35px;
    }
  }

  .heartlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    /* border: 1px solid orange; */
    .icon-heart {
      color: black;
      font-size: 30px;
    }
  }
`;

export default NavbarRightSide;
