import React, { useEffect, useState } from "react";
import RenterSpinner from "components/RenterCarousel";
import RentSearch from "components/RentSearch";
import axios from "axios";

function RenterView() {
  //set to state the drones that will be displayed through our RenterSpinner
  const [drones, updateDrones] = useState([]);

  //Use useEffect and axios below to pull certain drones from our backend
  useEffect(() => {
    axios
      .get("")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="renter header">
        <RentSearch />
      </div>

      <div className="section header">
        <h2>Pick By Purpose</h2>
      </div>
      <RenterSpinner />

      <div className="section header">
        <h2>Pick By Purpose</h2>
      </div>
      <RenterSpinner />

      <div className="section header">
        <h2>Pick By Purpose</h2>
      </div>
      <RenterSpinner />
    </>
  );
}

export default RenterView;
