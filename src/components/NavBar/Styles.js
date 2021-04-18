import styled from "styled-components";
import "../../assets/Fonts.css";

export const NavBarContainer = styled.div`
  background: #fafbfd;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBarTitle = styled.div`
  position: absolute;
  width: 114px;
  height: 20px;
  left: 48px;
  top: 38px;
  font-family: Poppins;
  font-size: 13px;
`;

export const MainColor = styled.span`
  color: #f7542e;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 180px;
  left: 48px;
  width: 150px;
`;

export const NavItem = styled.div`
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.selected ? "#090F31" : "#9e9e9e")};
  width: 62px;
  height: 20px;
  margin-bottom: 1.5em;
  cursor: pointer;

  &:hover {
    color: #090f31;
  }
`;