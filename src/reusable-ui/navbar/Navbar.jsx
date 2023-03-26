import React from "react";
import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

function Navbar({ userName, notifCart, notifHeart }) {
  // getName -----

  // -------------
  return (
    <NavbarStyled>
      <NavbarLeftSide />

      <NavbarRightSide
        userName={userName}
        notifCart={notifCart}
        notifHeart={notifHeart}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  background-color: white;
  /* border: 1px solid red; */
`;

export default Navbar;
