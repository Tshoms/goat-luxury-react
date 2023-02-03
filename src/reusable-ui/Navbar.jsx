import React from "react";
import styled from "styled-components";

function Navbar() {
  return <NavbarStyled>Navbar</NavbarStyled>;
}

const NavbarStyled = styled.div`
  height: 70px;
  width: 100%;
  background-color: grey;
`;

export default Navbar;
