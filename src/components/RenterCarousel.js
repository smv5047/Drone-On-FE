import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function RenterCarousel (props) {
    console.log(props.drones)
    const settings = {
        dots: true,
        
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Slider {...settings} >
            <div className="renter carouselCard">
                <img height={100} width={100}  src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
                <h3>{props.drones && props.drones.name}</h3>
            </div>
            <div className="renter carouselCard">
                <img height={100} width={100}  src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
                <h3>{props.drones && props.drones.name}</h3>
            </div>
            <div className="renter carouselCard">
                <img height={100} width={100} src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
                <h3>{props.drones && props.drones.name}</h3>
            </div>
            <div className="renter carouselCard">
                <img height={100} width={100} src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
                <h3>{props.drones && props.drones.name}</h3>
            </div>
            <div className="renter carouselCard">
                <img height={100} width={100}src={props.drones && props.drones.image} alt={props.drones && props.drones.name}/>
                <h3>{props.drones && props.drones.name}</h3>
            </div>
        </Slider>
    );
}