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
function EditDrone(props) {
  return (
    <Style>
      <Form>
        <Field type="text" name="name" placeholder="Drone Name" />
        <br />
        <Field type="text" name="model" placeholder="Drone Model" />
        <br />
        <Field type="text" name="brand" placeholder="Drone Brand" />
        <br />
        <Field type="text" name="purpose" placeholder="Purpose" />
        <br />
        <Field type="text" name="experience" placeholder="Experience Level" />
        <br />
        <Field
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          name="cost"
          placeholder="Rental Cost"
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Style>
  )
}

export default withFormik({
  mapPropsToValues({ name, model, brand, purpose, experience, cost }) {
    return {
      name: name || "",
      model: model || "",
      brand: brand || "",
      purpose: purpose || "",
      cost: cost || ""
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please provide a name for your drone"),
    model: yup.string().required("Please provide the model for your drone"),
    brand: yup.string().required("Please provide the brand for your drone"),
    purpose: yup
      .string()
      .required("Please provide the best way to use your drone"),
    cost: yup
      .number()
      .required("Please provide how much it cost to rent per day")
  }),
  handleSubmit(values, { props, setStatus, resetForm, setSubmitting }) {
      axios()
        .put(`https://droneon.herokuapp.com/api/drones/${props.id}`)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }

})(EditDrone)
