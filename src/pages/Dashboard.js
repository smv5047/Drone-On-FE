import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome"
import { faMinusCircle, faEdit } from "@fortawesome/free-solid-svg-icons"
import axios from "utils/Axios"
import EditDrone from "components/EditDrone"
import MyDrones from "components/MyDrones"
import RentedDrones from "components/RentedDrones"
import { CurrentUser } from "../App"

const Zoomedimage = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 30rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.4);
  & > div {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    min-width: 200px;
    display: flex;

    & > div {
      background-color: #fefefe;
      margin: auto;
      width: 40%;
      & > img {
        height: 100%;
        width: 100%;
      }
    }
  }
`

export default function Dashboard() {
  const [myDrones, setMyDrones] = useState([])
  const [rentedDrones, setRentedDrones] = useState([])
  const [selectedDrone, setSelectedDrone] = useState()
  const [editingDrone, setEditingDrone] = useState(false)
  const { authUser, setAuthUser } = useContext(CurrentUser)

  useEffect(() => {
    const storedEmail = localStorage.getItem("email")

    axios()
      .get(`droneon.herokuapp.com/api/users/`, {email: storedEmail})
      .then((res) => {
        setAuthUser(res.data)
      })
      .catch((err) => console.log(err))
    axios()
      .get("/api/drones.json")
      .then((res) => {
        console.log(res.data.data)
        setMyDrones(res.data.data)
        setRentedDrones(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const onClick = (drone) => {
    setSelectedDrone(drone)
  }
  const deleteDrone = (id) => {
    axios()
      .delete(`/users/drones/${id}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  const updateDrone = (drone) => {}

  const closeModal = () => {
    setSelectedDrone()
  }

  console.log("dash", myDrones)

  return (
    <div>
      <MyDrones onClick={onClick} myDrones={myDrones} />
      <RentedDrones onClick={onClick} rentedDrones={rentedDrones} />
      {selectedDrone && (
        <Zoomedimage>
          <div>
            <div>
              <span onClick={closeModal}>X</span>
              <img src={selectedDrone.Link} alt={selectedDrone.first_name} />
            </div>
            <div>
              {editingDrone ? (
                <>
                  <EditDrone id={selectedDrone.id} />
                  <button onClick={() => setEditingDrone(false)}>Cancel</button>
                </>
              ) : (
                <>
                  <h2>Drone: {selectedDrone.Name}</h2>
                  <h3>Cost Per Day ${selectedDrone.Cost}</h3>
                </>
              )}

              {!editingDrone && (
                <>
                  <FA onClick={() => setEditingDrone(true)} icon={faEdit} />
                  <FA
                    onClick={() => deleteDrone(selectedDrone.id)}
                    icon={faMinusCircle}
                  />
                </>
              )}
            </div>
          </div>
        </Zoomedimage>
      )}
    </div>
  )
}
