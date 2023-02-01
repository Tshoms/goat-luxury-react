import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import TextInput from "../../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";

function LoginForm() {
  return (
    <LoginFromStyle>
      <hr />
      <h2>Connectez-vous</h2>

      <TextInput
        placeholder="entrez votre prénom..."
        Icon={<BsPersonCircle className="icon" />}
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
