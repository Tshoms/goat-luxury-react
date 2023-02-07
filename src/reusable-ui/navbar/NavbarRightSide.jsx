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
        <span>0</span>

        {/* <div className="notif-cart"></div> */}
      </div>
      <div className="heartlogo">
        <FaRegHeart className="icon-heart" />
        <span>0</span>
        {/* <div className="notif-favorite"></div> */}
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
    border: 1px solid orange;
    position: relative;
    .icon {
      color: black;
      font-size: 35px;
    }

    /* .notif-cart {
      height: 15px;
      width: 15px;
      border: 2px solid black;
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 0;
    } */
  }

  .heartlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    height: 100%;
    border: 1px solid orange;
    position: relative;
    .icon-heart {
      color: black;
      font-size: 30px;
    }

    /* .notif-favorite {
      height: 15px;
      width: 15px;
      border: 2px solid black;
      border-radius: 20px;
      position: absolute;
      bottom: 0;
      left: 2;
    } */
  }
`;

export default NavbarRightSide;
