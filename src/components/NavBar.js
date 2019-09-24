import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Style = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const StyledLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  background-color: lightgray;
  border-bottom: 1px solid black;
  &:first-of-type {
    border-radius: 10px 0 0 0;
  }
  &:last-of-type {
    border-radius: 0 10px 0 0;
  }

  &.active {
    background-color: white;
    border: 1px solid black;
    border-bottom: 0;
  }
`;

export default function NavBar() {
  return (
    <Style>
      <StyledLink to="/" exact>
        Dashboard
      </StyledLink>
      <StyledLink to="/find-drone">I need a drone.</StyledLink>
      <StyledLink to="/have-drone">I have a drone.</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
    </Style>
  );
}
