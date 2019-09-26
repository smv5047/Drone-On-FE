import React from "react"

export default function MyDrones({myDrones}) {
 
  return (
    <div>
      {myDrones &&
        myDrones.map((drone) => <div key={drone.id}>{drone.Name}</div>)}
    </div>
  )
}
