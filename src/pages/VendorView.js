import React, { useState } from "react"
import styled from "styled-components"
import DroneForm from "components/DroneForm"

const Style = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`

export default function VendorView(props) {
  return (
    <Style>
      <h2>List your Drone</h2>
      <p>
        You have a drone you want to rent out. That's GREAT! Please provide the
        following information about your drone.
      </p>
      <DroneForm />
    </Style>
  )
}
