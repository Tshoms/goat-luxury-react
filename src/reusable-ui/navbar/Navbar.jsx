import React from "react";
import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

function Navbar({ userName }) {
  return (
    <NavbarStyled>
      <NavbarLeftSide />

      <NavbarRightSide userName={userName} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  background-color: white;
  /* border: 1px solid red; */
`;

export default Navbar;
