import React from "react"
import styled from "styled-components"
import { withFormik, Form, Field } from "formik"
import * as yup from "yup"
import axios from "utils/Axios"

const Style = styled.div.attrs()`
  margin: 1rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

function Login(props) {
  const { errors, touched, isSubmitting } = props

  return (
    <Style>
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <br />
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </Form>
    </Style>
  )
}
export default withFormik({
  mapPropsToValues({ password, email }) {
    return {
      email: email || "",
      password: password || ""
    }
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required("Please provide your email"),
    password: yup
      .string()
      .min(6, "Please set a password at least 6 characters long")
      .required("Please set a password at least 6 characters long")
  }),
  handleSubmit(values, { props, setStatus, resetForm, setSubmitting }) {
    const { saveToken } = props
    axios()
      .post("https://droneon.herokuapp.com/api/auth/login", values)
      .then((res) => {
        saveToken(res.data)
        props.history.push("/")
      })
      .catch((err) => console.log(err))
  }
})(Login)
