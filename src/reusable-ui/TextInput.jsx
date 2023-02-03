import React from "react";
import styled from "styled-components";

function TextInput({ Icon, value, onChange, className }) {
  return (
    <TextInputStyled className={className}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} required />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  background-color: white;
  border: 2px solid black;
  margin-bottom: 15px;
  border-radius: 10px;

  input {
    width: 80%;
    border: none;
  }
`;

export default TextInput;
