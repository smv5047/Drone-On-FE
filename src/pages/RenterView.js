import React, { useEffect, useState } from "react";
import RenterCarousel from "components/RenterCarousel";
import RentSearch from "components/RentSearch";
import axios from "utils/Axios";
import styled from "styled-components";
import img from '../search_background.jpg'




const Headerimage = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  height: 300px;
  margin: 0 auto;
  background-image: url(${img});
  background-size: 100%;
`

function RenterView() {
  //set to state the drones that will be displayed through our RenterSpinner
  const [drones, updateDrones] = useState([]);

  //Use useEffect and axios below to pull certain drones from our backend
  useEffect(() => {
    axios()
      .get("https://reqres.in/api/users?page=2")
      .then(res => updateDrones(res.data.data))
      // .then(res => updateDrones(res.data.results[0]))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="search-header">
        <Headerimage>
          <RentSearch />
        </Headerimage>
      </div>

      <div className="section header">
        <h2>Pick By Purpose</h2>
      </div>
      <RenterCarousel drones={drones}/>

      <div className="section header">
        <h2>Pick By Experience Level</h2>
      </div>
      <RenterCarousel drones={drones}/>

      <div className="section header">
        <h2>Pick By Cost</h2>
      </div>
      <RenterCarousel drones={drones}/>
    </>
  );
}

export default RenterView;
