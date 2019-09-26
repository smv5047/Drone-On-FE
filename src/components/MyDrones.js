import React from "react"

export default function MyDrones({myDrones}) {
 
  return (
    <div>
      <h1>My Drones</h1>
      {myDrones &&
        myDrones.map((drone) => <div key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}
