import React from "react";
import { Container, Title, MainColor, Nav, NavItem } from "./Styles";

const NavBar = () => {
  return (
    <Container>
      <Title>
        <MainColor>Dev</MainColor>challenges.io
      </Title>
      <Nav>
        <NavItem>Colors</NavItem>
        <NavItem>Typography</NavItem>
        <NavItem>Spaces</NavItem>
        <NavItem selected>Buttons</NavItem>
        <NavItem>Inputs</NavItem>
        <NavItem>Grid</NavItem>
      </Nav>
    </Container>
  );
};

export default NavBar;
