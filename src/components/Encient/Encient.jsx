import React from 'react'
import img1 from '../images/stonehenge.jpg'
import img2 from '../images/tajmahal.jpg'
import img3 from '../images/g-3.jpg'
import img4 from '../images/colizey.jpg'
import img5 from '../images/g-5.jpg'
import img6 from '../images/kremlin.jpg'
import img7 from '../images/great-wall.jpg'
import img8 from '../images/mount.jpg'
import img9 from '../images/pyramids.jpg'
import img10 from '../images/machupikchu.jpg'
import img11 from '../images/asakusa.jpg'
import img12 from '../images/sydney.jpg'
import './Encient.css'
export default function Encient() {
    return (
        <div className='container'>

            <div className="row my-3">
                <h1>Encient Places</h1>
                <div className="col-3">
                    <div className='box'>

                        <img src={img1} alt="" />
                        <div class="content">
                            <h3>Stonehenge <span>'England'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img2} alt="" />
                        <div class="content">
                            <h3>Taj Mahal <br /><span>'India'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img3} alt="" />
                        <div class="content">
                            <h3>Aphina's church <span>'Greece'</span></h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img4} alt="" />
                        <div class="content">
                            <h3>Rome colizey <br /><span>'Italy'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img5} alt="" />
                        <div class="content">
                            <h3>Leaning tower of pisa <br /><span>'Italy'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img6} alt="" />
                        <div class="content">
                            <h3>Kremlin <br /> <span>'Russia'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img7} alt="" />
                        <div class="content">
                            <h3>Great Wall of <span>'China'</span></h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img8} alt="" />
                        <div class="content">
                            <h3>Mount Rushmore <br /><span>'USA'</span></h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img9} alt="" />
                        <div class="content">
                            <h3>Pyramids <br /><span>'Egypt'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img10} alt="" />
                        <div class="content">
                            <h3>Machu Picchu <br /><span>'Peru'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img11} alt="" />
                        <div class="content">
                            <h3>Senso-ji Temple <br /><span>'Japan'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className='box'>

                        <img src={img12} alt="" />
                        <div class="content">
                            <h3>Sydney opera house <br /><span>'Australia'</span> </h3>
                            <a href="#" class="btn">see more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
