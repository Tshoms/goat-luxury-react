import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Profile from "../Profile";
import { Link } from "react-router-dom";

function NavbarRightSide({ userName, notifCart }) {
  return (
    <NavbarRightSideStyled>
      <Profile userName={userName} />
      <div className="cartlogo">
        <Link to={{ pathname: "/panier" }}>
          <FiShoppingCart className="icon" />
        </Link>
        <span>{notifCart}</span>
      </div>
      <div className="heartlogo">
        <Link to={{ pathname: "/Favori" }}>
          <FaRegHeart className="icon-heart" />
        </Link>
        <span>0</span>
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
    position: relative;
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
    position: relative;
    .icon-heart {
      color: black;
      font-size: 30px;
    }
  }
`;

export default NavbarRightSide;
