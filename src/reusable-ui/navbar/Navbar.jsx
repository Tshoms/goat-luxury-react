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
  width: 100%;
  background-color: white;
  padding-left: 5px;
  padding-right: 5px;
  /* position: sticky; */
`;

export default Navbar;
