import React, { useEffect, useState } from "react";
import RenterCarousel from "components/RenterCarousel";
import RentSearch from "components/RentSearch";
import axios from "utils/Axios";

function RenterView() {
  //set to state the drones that will be displayed through our RenterSpinner
  const [drones, updateDrones] = useState([]);

  //Use useEffect and axios below to pull certain drones from our backend
  useEffect(() => {
    axios()
      .get("https://reqres.in/api/users?page=2")
      .then(res => updateDrones(res.data.data[0]))
      // .then(res => updateDrones(res.data.results[0]))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="search-header">
        
        <RentSearch />

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
