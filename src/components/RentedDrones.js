import React from "react"

export default function RentedDrones(props) {
  const { rentedDrones, onClick } = props
  return (
    <div>
      <h1>Drones I've Rented</h1>
      {rentedDrones &&
        rentedDrones.map((drone) => <div onClick={()=>onClick(drone)} key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}