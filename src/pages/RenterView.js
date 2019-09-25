import React, { useEffect, useState } from "react"
import RenterCarousel from "components/RenterCarousel"
import RentSearch from "components/RentSearch"
import axios from "utils/Axios"
import styled from "styled-components"
import img from "../search_background.jpg"

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
    width: 80%;
    height: 60%;
    display: flex;
    position: absolute;
    top: 10px;
    left: 10%;
    & > div {
      background-color: #fefefe;
      margin: auto;
      width: 40%;
      &>img {
        height: 100%;
        width: 100%;
      }
    }

  }
`
const Headerimage = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  height: 300px;
  margin: 0 auto;
  background-image: url(${img});
  background-size: 100%;
`
const Search = styled.div`
  padding-top: 200px;
  padding-left: 42.5%;
  z-index: 2;
`
const Style = styled.div`
  .slides .slick-prev,
  .slides .slick-next {
    background-color: #445774;
    color: black;
  }
  .slides {
    position: relative;
    text-align: center;
  }
  .slides .slick-prev,
  .slides .slick-next {
    position: absolute;
    top: 30%;
    z-index: 1;
  }
  .slides .slick-prev {
    left: 5%;
  }
  .slides .slick-next {
    right: 5%;
  }
`
function RenterView() {
  //set to state the drones that will be displayed through our RenterSpinner
  const [drones, updateDrones] = useState([])
  const [zoom, updateZoom] = useState(false)
  const [selectedDrone, updateSelectedDrone] = useState()
  //Use useEffect and axios below to pull certain drones from our backend
  useEffect(() => {
    axios()
      .get("https://reqres.in/api/users?page=2")
      .then((res) => updateDrones(res.data.data))
      // .then(res => updateDrones(res.data.results[0]))
      .catch((err) => console.log(err))
  }, [])

  function handleClick(e) {
    console.log(e.target)
    updateSelectedDrone(e.target)
    updateZoom(true)
    console.log(selectedDrone)
  }

  return (
    <Style>
      <div className="search-header">
        <Headerimage>
          <Search>
            <RentSearch />
          </Search>
        </Headerimage>
      </div>
      <div className="section header">
        <h2>Pick By Purpose</h2>
      </div>
      <RenterCarousel updateZoom={updateZoom} updateSelectedDrone={updateSelectedDrone} drones={drones} />
      <div className="section header">
        <h2>Pick By Experience Level</h2>
      </div>
      <RenterCarousel updateZoom={updateZoom} updateSelectedDrone={updateSelectedDrone} drones={drones} />
      <div className="section header">
        <h2>Pick By Cost</h2>
      </div>
      <div>
        <RenterCarousel updateZoom={updateZoom} updateSelectedDrone={updateSelectedDrone} drones={drones} />
      </div>
      {zoom === true && (
        <Zoomedimage>
          <div>
            <div>
              <img src={selectedDrone.avatar} alt={selectedDrone.first_name} />
            </div>
            <div>
              <label></label>
              <h2>{selectedDrone.first_name}</h2>
              <h3>{selectedDrone.last_name}</h3>
              
              <form>
                <label name="Date Range">
                  <input 
                    type="date"
                    id="startdate"
                    >
                  </input>
                  <input 
                    type="date"
                    id="enddate"
                    >
                  </input>
                </label>
                <button>Reserve Your Drone</button>
                <h4></h4>
              </form>
            </div>
          </div>
        </Zoomedimage>
      )}
    </Style>
  )
}
export default RenterView