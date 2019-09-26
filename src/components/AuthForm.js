import React from "react"
import styled from "styled-components"
import Login from "components/Login"
import Signup from "components/Signup"

const Style = styled.div.attrs()`
  margin: 1rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export default function AuthForm(props) {
  return <Style>{props.signup ? <Signup {...props} /> : <Login {...props} />}</Style>
}
