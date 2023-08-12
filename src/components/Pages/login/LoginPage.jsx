import React from "react";
import "./LoginPage.css";
// import styled from "styled-components";
// import Luxury from "../../../assets/picture/goatluxury.jpg";
import YoungStyled from "../../../assets/vidéo/youngstyled.mp4";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="main-home">
      <div className="overlay"></div>
      <video src={YoungStyled} autoPlay loop muted></video>
      <div className="content2">
        <h1 className="title2">The Goat Luxury</h1>
        <h2 className="h2mobile">Mobile coming soon</h2>
      </div>
      <div className="content">
        <h1>The Goat Luxury</h1>
        <h2>Welcome to our store</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
