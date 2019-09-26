import React from "react"

export default function RentedDrones({ rentedDrones }) {
  return (
    <div>
      <h1>Drones I have rented</h1>
      {rentedDrones &&
        rentedDrones.map((drone) => <div key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}
