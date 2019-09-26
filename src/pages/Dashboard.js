import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MyDrones from "components/MyDrones"
import RentedDrones from "components/RentedDrones"
import axios from "utils/Axios"

export default function Dashboard() {
  const [myDrones, setMyDrones] = useState([])
  const [rentedDrones, setRentedDrones] = useState([])

  useEffect(() => {
    axios()
    .get("/api/drones.json")
      .then(res => {
        console.log(res.data.data)
        setMyDrones(res.data.data)
        setRentedDrones(res.data.data)
      })
  }, [])

  console.log('dash',myDrones)

  return (
    <div>
      <MyDrones myDrones={myDrones} />
      <RentedDrones rentedDrones={rentedDrones} />
    </div>
  )
}
