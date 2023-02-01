import React from "react";
import styled from "styled-components";
import Luxury from "../../../assets/picture/goatluxury.jpg";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <LoginStyled>
      <h1>Goat Luxury</h1>
      <h2>Welcome</h2>
      <LoginForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ::before {
    content: "";
    background: url(${Luxury}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  h1 {
    font-family: "Playfair Display", serif;
    color: white;
    font-size: 58px;
  }

  h2 {
    font-family: "Playfair Display", serif;
    color: white;
    font-size: 36px;
  }
`;

export default LoginPage;
