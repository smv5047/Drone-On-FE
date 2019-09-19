import React from 'react'
import RenterSpinner from './components/renterspinner.js'
import RentSearch from './components/rentsearch.js'

function renterView () {




    return (
        <>
            <div className="renter header">
                <RentSearch/>
            </div>

            <div className="section header">
                <h2>Pick By Purpose</h2>
            </div>
            <RenterSpinner/>

            <div className="section header">
                <h2>Pick By Purpose</h2>
            </div>
            <RenterSpinner/>

            <div className="section header">
                <h2>Pick By Purpose</h2>
            </div>
            <RenterSpinner/>
        </>
    )
}

export default renterView