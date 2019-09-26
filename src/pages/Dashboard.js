import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MyDrones from "components/MyDrones"
import RentedDrones from "components/RentedDrones"
import axios from "utils/Axios"

export default function Dashboard() {
  const [myDrones, setMyDrones] = useState([])
  const [rentedDrones, setRentedDrones] = useState([])
  const [selectedDrone, setSelectedDrone]=useState()

  useEffect(() => {
    axios()
      .get("/api/drones.json")
      .then((res) => {
        console.log(res.data.data)
        setMyDrones(res.data.data)
        setRentedDrones(res.data.data)
      })
  }, [])

  const onClick = (drone) => {
    setSelectedDrone(drone)
  }

  const closeModal= ()=>{
      setSelectedDrone()
  }

  console.log("dash", myDrones)

  return (
    <div>
      <MyDrones onClick={onClick} myDrones={myDrones} />
      <RentedDrones onClick={onClick} rentedDrones={rentedDrones} />
      {selectedDrone&& <div>Selected drone: {selectedDrone.Name}  <span onClick={closeModal}>X</span></div>}
    </div>
  )
}
