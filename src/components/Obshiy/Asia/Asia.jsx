import React from 'react'
import {Link} from 'react-router-dom' 
import Img1 from '../../images/asia-1.png'
import Img2 from '../../images/asia-2.png'
import Img3 from '../../images/asia-3.png'
import Img4 from '../../images/asia-4.png'
import Img5 from '../../images/asia-5.png'
import Img6 from '../../images/asia-6.png'
import Img7 from '../../images/asia-7.png'
import Img8 from '../../images/asia-8.png'
import Img9 from '../../images/asia-9.png'
import Img10 from '../../images/asia-10.png'
import Img11 from '../../images/p-5.jpg'
import Img12 from '../../images/asia-12.jpg'
import './asia.css'

export default function Asia() {
    return (
        <div>
            <div class="main-menu">
                <Link to={"/"}><a> <i class="fas fa-reply"></i> Back to main menu</a></Link>
            </div>
            <section class="europe">
                <h1 class="heading">
                    <span>Choose</span>
                    <span>which</span>
                    <span>country</span>
                    <span>you</span>
                    <span>want</span>
                    <span>to</span>
                    <span>go</span>
                    <span>?</span>
                    <br /><br />

                    <div class="title">
                        <span>Welcome</span>
                        <span>to</span>
                        <span>Asia</span>
                    </div>
                    <br />

                </h1>
                
                <div class="textAsia">
                    <p>"The land of a thousand smiles" and the most popular destination in Southeast Asia, where you can find, perhaps, all the options for recreation. <br /> Looking for a classic getaway in a modern resort? Please. Dreaming of a vibrant nightlife and extreme adventure? <br /> Easily.
                        Dreaming of secluded beaches far from civilization? In Thailand, there are enough of them for everyone. <br /> The main thing is to choose the right resort, trusting the professionals. The capital and main air gate of the country is the city of Bangkok.</p>
                    <br />
                </div>

                <h1 class="heading">
                    <div class="title">
                        <span>Tours</span>
                        <span>for</span>
                        <span>Asia</span>
                    </div>
                    <br />

                    <span>For</span>
                    <span>Your</span>
                    <span>Best</span>
                    <span>Holiday</span>
                    <span>!</span>
                </h1>


                <div class="ASIAbox-container">
                    <div class="ASIAbox">
                        <img src={Img1} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Thailand </h3>
                                <span class="btn login-btn">book now </span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img2} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Malaysia </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img3} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Czech Republic </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img4} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Cypres </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img5} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Germany </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img6} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> China </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img7} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Greece </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img8} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Austria </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img9} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> India </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img10} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Azerbaijan </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img11} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Japan </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>
                    <div class="ASIAbox">
                        <img src={Img12} alt="#" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> South Korea </h3>
                                <span class="btn login-btn">book now</span>
                            </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
