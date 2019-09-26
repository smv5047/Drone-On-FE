import React from "react"
import styled from "styled-components"
import { withFormik, Form, Field } from "formik"
import * as yup from "yup"


const Style = styled.form.attrs()`
  margin: 1rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
export default function AuthForm(props) {
  const { user, setUser, onSubmit } = props

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  return (
    <Style onSubmit={onSubmit}>
      {props.signup && (
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={user.name}
          onChange={onChange}
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={onChange}
      />
      <button type="submit">{props.signup ? `Submit` : `Login`}</button>
    </Style>
  )
}
