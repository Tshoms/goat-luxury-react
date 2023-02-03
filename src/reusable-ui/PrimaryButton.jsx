import React from "react";
import styled from "styled-components";

function PrimaryButton({ label, className }) {
  return (
    <PrimaryButtonStuled>
      <span>{label}</span>
    </PrimaryButtonStuled>
  );
}

const PrimaryButtonStuled = styled.button`
  padding: 12px 0px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;

export default PrimaryButton;
