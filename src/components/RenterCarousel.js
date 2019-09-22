import React from 'react'
import Slider from 'react-slick'

export default function RenterCarousel (props) {



    return (
        <Slider>
            
            <img src={props.url}/>
            <h3>{props.name}</h3>
        </Slider>
    );
}