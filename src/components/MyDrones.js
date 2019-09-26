import React from "react"

export default function MyDrones(props) {
  const { myDrones, onClick } = props
  return (
    <div>
      <h1>Drones I Have</h1>
      {myDrones &&
        myDrones.map((drone) => <div onClick={()=>onClick(drone)} key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}
