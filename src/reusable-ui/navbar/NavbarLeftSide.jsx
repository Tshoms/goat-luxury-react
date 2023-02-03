import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import { GrFormSearch } from "react-icons/gr";

function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <div className="brand">
        <h5>The Goat Luxury</h5>
      </div>
      <div className="search-bar">
        <TextInput
          Icon={<GrFormSearch className="icon-search" />}
          className={"textinput-nav"}
        />
      </div>
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    /* border: 1px solid green; */

    h5 {
      color: black;
      font-family: "Playfair Display", serif;
      font-size: 23px;
    }
  }

  .search-bar {
    display: flex;
    height: 100%;
    width: 35%;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
    margin-left: 49px;
    .icon-search {
      color: black;
      font-size: 20px;
      margin-right: 7px;
    }
    .textinput-nav {
      margin-top: 20px;
      padding: 5px;
    }
  }
`;

export default NavbarLeftSide;
