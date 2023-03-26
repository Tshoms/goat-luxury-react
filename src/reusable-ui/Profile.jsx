import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserName } from "../redux/slice/cartSlice";

function Profile({ userName }) {
  // state -----------------------
  const arrayUser = useSelector((state) => state.cartItems.arrayUser);

  // comportement ----------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault();
    dispatch(deleteUserName(arrayUser));
    navigate({
      pathname: "/",
    });
  };
  //------------------------------
  return (
    <ProfileStyled>
      <div className="userlogo">
        <BiUser className="icon" />
      </div>
      <div className="username">
        <p>
          Hey, <span>{userName}</span>
        </p>

        <div className="logout" onClick={handleclick}>
          <p>déconnexion</p>
        </div>
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

    span {
      font-weight: bold;
    }

    .logout {
      height: 30%;
      width: 100%;
      /* border: 1px solid pink; */
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
`;

export default Profile;
