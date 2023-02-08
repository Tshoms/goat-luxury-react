import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

function Profile({ userName }) {
  return (
    <ProfileStyled>
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
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  width: 30%;
  /* border: 1px solid green; */

  .userlogo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 65px;
    /* border: 1px solid black; */

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
    /* border: 1px solid blue; */

    .logout {
      height: 30%;
      width: 100%;
      /* border: 1px solid pink; */
      text-decoration: none;
      color: black;
    }
  }
`;

export default Profile;
