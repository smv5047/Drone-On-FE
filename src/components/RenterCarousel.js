import React from 'react'
import Slider from 'react-slick'

export default function RenterCarousel (props) {
    console.log(props.drones)
    

    return (
        <Slider>

            <img src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
            <h3>{props.drones && props.drones.name}</h3>
        </Slider>
    );
}