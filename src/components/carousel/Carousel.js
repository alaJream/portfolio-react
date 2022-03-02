import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import mountain from '../images/mountain.jpeg';
import blue from '../images/blue.jpeg';

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={mountain} alt="myImage" />
                        <div className={classes.h1}>
                            <h1 >Hi, Welcome to my portfolio</h1>
                            <a href="https://docs.google.com/document/d/1LzC8K7S5_tfPeeGW0g5P7JBdWJ840_F3v6URFlCFJhI/edit?usp=sharing" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={blue} alt="myImage" />
                        <div className={classes.h2}>
                            <h1> Check my </h1>
                            <h1>Progress!</h1>
                            <a href="https://github.com/alaJream" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default CarouselImages