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
    span {
      position: absolute;
      top: 10%;
      font-weight: bold;
    }
    & > div {
      background-color: #fefefe;
      margin: auto;
      width: 40%;
      &>img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
    form {
      color: #172233;
      h2, h3, h4{
        color: #172233;
      }
      label {
        color: #172233;
      }
      input {
        color: #172233;
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
  button {
    position: absolute;
    left: 48.5%;
    margin-top: 5px;
  }
`
const Style = styled.div`
  div>h2{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  .slides .slick-prev,
  .slides .slick-next {
    background-color: #172233;
    color: #172233;
    border-radius: 20px;
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
  const [cost, setCost] = useState(0)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  // Use useEffect and axios below to pull certain drones from our backend
  useEffect(() => {
    axios()
      .get("https://droneon.herokuapp.com/api/users/drones")
      .then((res) => updateDrones(res.data))
      .catch((err) => console.log(err))
  }, [])

  function handleChange(e) {
    console.log(e)
    setCost(e.target.cost)
    
    if (endDate === null){
    setStartDate(e)
    } else {
      setEndDate(e)
    }
 
  }
  /* Function to Close Out Zoomed in Drone */
  const closeZoom= ()=>{
    updateZoom(false)
  }
 
  // Function to Handle Submission and Input into the Drone Form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    // if (endDate.parse() < startDate.parse()){
    //   alert("Please pick a date in the future")
    // } else {
    alert("Thank you for your purchase!")
    updateZoom(false)
// }
}
 
 
/*Setting minimum date for reserving on calendar to current day */
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
today = yyyy+'-'+mm+'-'+dd;


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
              <span onClick={closeZoom}>X</span>
              <br/>
              <br/>
              <br/>
              <br/>
              <img src={selectedDrone.Link} alt={selectedDrone.first_name} />
            </div>
            <div>
              <label></label>
              <h2>Drone: {selectedDrone.Name}</h2>
              <h3>Cost Per Day ${selectedDrone.Cost}</h3>
              
              <form onSubmit={e => handleSubmit(e)}>
                <label name="DateRange">
                  Which Dates Would You Like this Drone?
                  <br/>
                  <br/> 
                  <input 
                    type="date"
                    min={today}
                    id="startDate"
                    selected={startDate}
                    placeholder="Start Date"
                    onChange={e => handleChange(e)}
                    >
                  </input>
                  <input 
                    type="date"
                    id="endDate"
                    min={today}
                    selected={endDate}
                    placeholder="Return Date"
                    onChange={e => handleChange(e)}
                    >
                  </input>
                  </label>
                <br/>
                <br/>
                <button type="submit">Reserve the {selectedDrone.Name}</button>
                <h4>Total Cost ${'00.00'}</h4>
              </form>
            </div>
          </div>
        </Zoomedimage>
      )}
    </Style>
  )
}
export default RenterView
