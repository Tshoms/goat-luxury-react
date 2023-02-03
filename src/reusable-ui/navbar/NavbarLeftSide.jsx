import React from "react";
import styled from "styled-components";

function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <div className="brand">
        <h5>The Goat Luxury</h5>
      </div>
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border: 1px solid red;

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    border: 1px solid green;

    h5 {
      color: black;
      font-family: "Playfair Display", serif;
      font-size: 23px;
    }
  }
`;

export default NavbarLeftSide;
