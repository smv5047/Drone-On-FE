import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import styled from "styled-components";

const CarouselCard = styled.div`
    img{
    margin: 0 auto;
    border-radius: 5px;
     &:hover{
         box-shadow: 5px 5px 10px #172233;
     }
    }
`

export default function RenterCarousel (props) {
    console.log(props.drones)
    const settings = {
        dots: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: "slides"
    };

    return (
        <Slider {...settings} >
            {props.drones.map(drone=> (
            <CarouselCard onClick={() =>{props.updateSelectedDrone(drone) ; props.updateZoom(true)}}>
                <img height={100} width={100} src={drone && drone.Link} alt={drone && drone.Name}/>
                <h3>{drone && drone.name}</h3>
            </CarouselCard>
            ))}

        </Slider>
    );
}