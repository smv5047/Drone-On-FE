import React from "react"

export default function RentedDrones({rentedDrones}) {
 
  return (
    <div>
      {rentedDrones &&
        rentedDrones.map((drone) => <div key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}
