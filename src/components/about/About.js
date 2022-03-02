import React, { Component } from 'react'
import classes from './About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Hello!</h2>
                    <div className={classes.About}>
                        <p> My name is <b>Jeremy Gonzales</b> and I am currently attending at <b>Dominican University of California</b>. Pursuing my Bachelors Degree in Applied Computer Science. I am really interested in developing new things and I'm always excited to learn. :)  </p>
                        <p className={classes.br}>I strive to be better one line of code at a time. 
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;