import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 100px;
  max-height: 100px;
`

export default function RentedDrones(props) {
  const { rentedDrones, onClick } = props
  return (
    <div>
      <h1>Drones I've Rented</h1>
      {rentedDrones &&
        rentedDrones.map((drone) => (
          <div onClick={() => onClick(drone)} key={drone.id}>
            <Img src={drone.Link} alt={drone.first_name} />
            {drone.Name}
          </div>
        ))}
    </div>
  )
}
