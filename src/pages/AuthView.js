import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import AuthForm from "components/AuthForm"
import axios from "utils/Axios"


const StyledView = styled.div`
  max-width: 400px;
  margin: 1rem auto;
  border: 1px black solid;
  border-radius: 10px;
`

const Style = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`

const StyledLink = styled(NavLink).attrs({
  activeClassName: "active"
})`
  background-color: lightgray;
  border-radius: 10px 10px 0 0;
  &:first-of-type {
    border-radius: 10px 0 0 0;
  }
  &:last-of-type {
    border-radius: 0 10px 0 0;
  }
  &.active {
    background-color: white;
  }
`

export default function AuthView(props) {
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const saveToken = (token) => {
    localStorage.setItem("token", token)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    !props.signup
      ? axios()
          .post("https://reqres.in/api/login", user)
          .then((res) => {
            saveToken(res.data.token)
            props.history.push("/")
          })
          .catch((err) => console.log(err))
      : axios()
          .post("https://reqres.in/api/register", user)
          .then((res) => {
            saveToken(res.data.token)
            props.history.push("/")
          })
          .catch((err) => console.log(err))
  }

  return (
    <StyledView>
      <Style>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
      </Style>
      <AuthForm
        user={user}
        setUser={setUser}
        signup={props.signup}
        onSubmit={onSubmit}
      />
    </StyledView>
  )
}
