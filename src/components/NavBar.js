import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Style = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px 10px 0 0;
    background-color: #d0d2d6;
    a {
      background-color: #d0d2d6;
      color: #172233;
      padding: 1rem;
      margin: 0rem 10rem;  
      text-align: center;
      text-decoration: none;
      font-size: 1.5rem;
      outline: none;
    }
`

const StyledLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  /* border-bottom: 1px solid black; */
  &:first-of-type {
    /* border-radius: 10px 10px 0 0; */
  }
  &:last-of-type {
    border-radius: 0 0 0 0;
  }

  &.active {
    background-color: #e3e4e7;
    /* border: 1px solid black; */
    /* border-bottom: 0; */
  }
`

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
  )
}
