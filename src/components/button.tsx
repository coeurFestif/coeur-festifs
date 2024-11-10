// Button.tsx
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  background-color: #6200ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;

export const Button = ({ text, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
