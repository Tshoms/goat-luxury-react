import React from "react";
import styled from "styled-components";

function PrimaryButton({ label, className }) {
  return (
    <PrimaryButtonStuled className={className}>
      <span>{label}</span>
    </PrimaryButtonStuled>
  );
}

const PrimaryButtonStuled = styled.button`
  padding: 12px 0px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  color: white;
  background-color: black;
  border: 2px solid white;

  :hover {
    color: black;
    background-color: white;
    border: 2px solid black;
    transition: all 200ms ease-out;
  }
`;

export default PrimaryButton;
