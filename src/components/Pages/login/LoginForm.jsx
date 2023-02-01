import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <LoginFromStyle>
      <hr />
      <h2>Connectez-vous</h2>
      <input type="text" className="input-style" />
      <button>accéder à mon espace</button>
    </LoginFromStyle>
  );
}

const LoginFromStyle = styled.form`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 30%;
  border: 1px solid red;
`;

export default LoginForm;
