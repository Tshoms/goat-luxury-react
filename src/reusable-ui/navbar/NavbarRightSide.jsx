import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Profile from "../Profile";

function NavbarRightSide({ userName }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="info">
        <div className="userlogo">
          <BiUser className="icon" />
        </div>
        <div className="username">
          <p>Hey, {userName}</p>
          <Link to={"/"}>
            <div className="logout">
              <p>déconnexion</p>
            </div>
          </Link>
        </div>
      </div> */}
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

  /* .info {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    width: 30%;
    border: 1px solid green;

    .userlogo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 80px;
      /* border: 1px solid black; 

      .icon {
        color: black;
        font-size: 35px;
      }
    }

    .username {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 67%;
      /* border: 1px solid blue; *

      .logout {
        height: 30%;
        width: 100%;
        /* border: 1px solid pink; 
        text-decoration: none;
        color: black;
      }
    }
  } */

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
