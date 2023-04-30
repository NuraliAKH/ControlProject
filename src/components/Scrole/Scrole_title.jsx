import React from 'react'
import Carousel from "react-multi-carousel";
import './scrole_title.css'
import "react-multi-carousel/lib/styles.css";
import Vid1 from '../images/vid-1.mp4'
import Vid2 from '../images/vid-2.mp4'
import Vid3 from '../images/vid-3.mp4'
import Vid4 from '../images/vid-4.mp4'



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function Scrole_title() {
    return (
        <div>
            <Carousel responsive={responsive} showDots={true} autoPlay={true} infinite={true}>
                <div><video autoPlay muted><source src={Vid1} type="video/mp4" /></video></div>
                <div><video autoPlay muted><source src={Vid2} type="video/mp4" /></video></div>
                <div><video autoPlay muted><source src={Vid3} type="video/mp4" /></video></div>
                <div><video autoPlay muted><source src={Vid4} type="video/mp4" /></video></div>
            </Carousel>;
            <div className='text'>
                <h3>adventure is worth while</h3>
                <p>Dicover new places with us, adventure awaits !</p>
                <a href="#" class="btn login-btn">Discover more</a>
            </div>
        </div>
    )
}
