import React from "react"
import styled from "styled-components"

const Style = styled.form.attrs()`
  margin: 1rem;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
export default function DroneForm(props) {
  const { vendorDrone, setVendorDrone, onSubmit } = props

  const onChange = (event) => {
    setVendorDrone({ ...vendorDrone, [event.target.name]: event.target.value })
  }

  return (
    <Style onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Drone Name"
        value={vendorDrone.name}
        onChange={onChange}
      />

      <input
        type="text"
        name="model"
        placeholder="Drone Model"
        value={vendorDrone.model}
        onChange={onChange}
      />
      <input
        type="text"
        name="brand"
        placeholder="Drone Brand"
        value={vendorDrone.brand}
        onChange={onChange}
      />
      <input
        type="text"
        name="purpose"
        placeholder="Purpose"
        value={vendorDrone.purpose}
        onChange={onChange}
      />

      <input
        type="text"
        name="experience"
        placeholder="Experience Level"
        value={vendorDrone.experience}
        onChange={onChange}
      />
      <input
        type="number"
        min="0.00"
        max="10000.00"
        step="0.01"
        name="cost"
        placeholder="Rental Cost"
        value={vendorDrone.cost}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </Style>
  )
}
