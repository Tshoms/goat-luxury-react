import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import TextInput from "../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  getLocalStorageUser,
  getUserName,
} from "../../../redux/slice/cartSlice";

function LoginForm() {
  // state ------
  const [userName, setUserName] = useState("");
  const NameUser = {
    name: userName,
  };

  const navigate = useNavigate();

  // comportement -------
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      dispatch(getLocalStorageUser());
    }
  }, []);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("onSubmit");
    navigate({
      pathname: "/acceuil/:user",
      search: createSearchParams({
        userName: userName,
      }).toString(),
    });
    dispatch(getUserName(NameUser));
    toast.success(`Happy to see you ${userName} 👋 !`);
    setUserName("");
  };

  return (
    <LoginFromStyle onSubmit={handleSubmit}>
      <hr />
      <h2>Connectez-vous</h2>

      <TextInput
        placeholder="entrez votre prénom..."
        Icon={<BsPersonCircle className="icon" />}
        value={userName}
        onChange={handleChange}
      />
      <PrimaryButton label={"Accéder à votre profile"} />
    </LoginFromStyle>
  );
}

const LoginFromStyle = styled.form`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 30%;
  /* border: 1px solid red; */

  hr {
    height: 3px;
    width: 100%;
    background-color: white;
  }

  .icon {
    font-size: 20px;
    margin-right: 13px;
    color: grey;
  }
`;

export default LoginForm;
