import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AuthForm from "components/AuthForm";

const StyledView = styled.div`
  max-width: 400px;
  margin: 1rem auto;
`;

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
  border-bottom: 1px solid black;
  background-color: lightgray;
  &.active {
    background-color: white;
    border-radius: 5px 5px 0 0;
    border: 1px solid black;
    border-bottom: 0;
  }
`;

export default function AuthView(props) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  return (
    <StyledView>
      <Style>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
      </Style>
      <AuthForm user={user} setUser={setUser} signup={props.signup} />
    </StyledView>
  );
}
