import React from "react";
import {
  NavBarContainer,
  NavBarTitle,
  MainColor,
  Nav,
  NavItem,
} from "./Styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarTitle>
        <MainColor>Dev</MainColor>challenges.io
      </NavBarTitle>
      <Nav>
        <NavItem>Colors</NavItem>
        <NavItem>Typography</NavItem>
        <NavItem>Spaces</NavItem>
        <NavItem selected>Buttons</NavItem>
        <NavItem>Inputs</NavItem>
        <NavItem>Grid</NavItem>
      </Nav>
    </NavBarContainer>
  );
};

export default NavBar;
