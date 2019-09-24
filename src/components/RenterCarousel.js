import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function RenterCarousel (props) {
    console.log(props.drones)
    const settings = {
        dots: true,
        
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Slider {...settings} >
            {props.drones.map(drone=> (
            <div className="renter carouselCard">
                <img height={100} width={100}  src={drone && drone.avatar} alt={drone && drone.first_name}/>
                <h3>{drone && drone.first_name}</h3>
            </div>
            ))}

        </Slider>
    );
}