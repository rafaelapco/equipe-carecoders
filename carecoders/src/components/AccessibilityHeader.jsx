import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;
  padding: 0 10px;
`;

const AccessibilityItem = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const AccessibillityHeader = () => {
  return (
    <Header>
      <AccessibilityItem>Acessibilidade</AccessibilityItem>
      <AccessibilityItem>Contraste</AccessibilityItem>
      <AccessibilityItem>A+</AccessibilityItem>
      <AccessibilityItem>A-</AccessibilityItem>
    </Header>
  );
};

export default AccessibillityHeader;
