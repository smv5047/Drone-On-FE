import React, { useState } from "react"
import styled from "styled-components"
import DroneForm from "components/DroneForm"
import axios from "utils/Axios"


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

export default function VendorView(props) {
  const [vendorDrone, setVendorDrone] = useState({ name: "", model: "", brand: "", purpose: "", experience: "", cost: "" })

  const onSubmit = (event) => {
    event.preventDefault()
    axios()
          .post("https://reqres.in/api/users/", vendorDrone)
          .then((res) => {
            props.history.push("/")
          })
          .catch((err) => console.log(err))
  }

  return (
    <Style>
      <DroneForm
        vendorDrone={vendorDrone}
        setVendorDrone={setVendorDrone}
        onSubmit={onSubmit}
      />
    </Style>
  )
}
