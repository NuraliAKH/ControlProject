import React from 'react'

export default function Main() {
  return (
    <div>
        <header>
        <div id="menu-bar" className="fas fa-bars"></div>

        <a href="#" className="logo"><span>T</span>ravel</a>

        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#gallery">Gallery</a>
            <a href="#packages">Tours</a>
            <a href="#book">Book</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
            <i className="fas fa-search" id="search-btn"></i>
            <i className="fas fa-user login-btn"></i>
        </div>

        <form action="" className="search-bar-container">
            <input type="search" id="search-bar" placeholder="search here..."/>
            <label for="search-bar" className="fas fa-search"></label>
        </form>
    </header>


    <div className="login-form-container">

        <i className="fas fa-times" id="form-close"></i>
        <form action="">
            <h3>login</h3>
            <input type="email" className="box" placeholder="enter your email"/>
            <input type="password" className="box" placeholder="enter your password">
            <input type="submit" value="login now" className="btn">
            <input type="checkbox" id="remember">
            <label for="remember">remember me</label>
            <p>forget password? <a href="#">click here</a></p>
            <p>don't have and account? <a href="#">register now</a></p>
        </form>

    </div>


    <div className="home" id="home">

        <div className="content">
            <h3>adventure is worth while</h3>
            <p>Dicover new places with us, adventure awaits !</p>
            <a href="#" className="btn login-btn">Discover more</a>
        </div>

        <div className="controls">
            <span className="vid-btn active" data-src="images/vid-1.mp4"></span>
            <span className="vid-btn" data-src="images/vid-2.mp4"></span>
            <span className="vid-btn" data-src="images/vid-3.mp4"></span>
            <span className="vid-btn" data-src="images/vid-4.mp4"></span>
            <span className="vid-btn" data-src="images/vid-5.mp4"></span>
        </div>

        <div className="video-container">
            <video src="images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
        </div>
    </div>


    <div className="gallery" id="gallery">
        <h1 className="heading">

            <span>A</span>
            <span>n</span>
            <span>c</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
            <br/><br/>
            <span>P</span>
            <span>l</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
        </h1>

        <div className="box-container">

            <div className="box">
                <img src="images/stonehenge.jpg" alt=""/>
                <div className="content">
                    <h3>Stonehenge <span>'England'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="images/tajmahal.jpg" alt=""/>
                <div className="content">
                    <h3>Taj Mahal <br/><span>'India'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
 
            <div className="box">
                <img src="images/g-3.jpg" alt=""/>
                <div className="content">
                    <h3>Aphina's church <span>'Greece'</span></h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="images/colizey.jpg" alt=""/>
                <div className="content">
                    <h3>Rome colizey <br/><span>'Italy'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="images/g-5.jpg" alt=""/>
                <div className="content">
                    <h3>Leaning tower of pisa <br/><span>'Italy'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>

            <div className="box">
                <img src="images/kremlin.jpg" alt=""/>
                <div className="content">
                    <h3>Kremlin <br/> <span>'Russia'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
  
            <div className="box">
                <img src="images/great-wall.jpg" alt=""/>
                <div className="content">
                    <h3>Great Wall of <span>'China'</span></h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
     
            <div className="box">
                <img src="images/mount.jpg" alt=""/>
                <div className="content">
                    <h3>Mount Rushmore <br/><span>'USA'</span></h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
        
            <div className="box">
                <img src="images/pyramids.jpg" alt=""/>
                <div className="content">
                    <h3>Pyramids <br/><span>'Egypt'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
               <div className="box">
                <img src="images/machupikchu.jpg" alt=""/>
                <div className="content">
                    <h3>Machu Picchu <br/><span>'Peru'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
            <div className="box">
                <img src="images/asakusa.jpg" alt=""/>
                <div className="content">
                    <h3>Senso-ji Temple <br/><span>'Japan'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
            
            <div className="box">
                <img src="images/sydney.jpg" alt=""/>
                <div className="content">
                    <h3>Sydney opera house <br/><span>'Australia'</span> </h3>
                    <a href="#" className="btn">see more</a>
                </div>
            </div>
        </div>

    </div>

    <div className="film">
        <div className="box-container">
            <div className="box">
                <h3>Travel with <span>T</span>RAVEL</h3>
                <p>
                    We have studied everything, we have looked at everything, we guarantee a quality rest
                    <br/><br/>
                    <span>Our team of specialists will help you organize your tour for:</span>
                    <br/>
                    • collection of documents for obtaining a visa;
                    <br/>
                    • when choosing the best hotel, taking into account your interests;
                    <br/>
                    • booking in comfortable hotels;
                    <br/>
                    • issuance of an insurance policy;
                    <br/>
                    • in search of the best flight route in the chosen direction;
                    <br/>
                    • search for air tickets;
                    <br/>
                    • organizing transfers from the airport to the hotel;
                    <br/>
                    • organizing cultural excursions around the resort town;</p>
            </div>

            <img src="images/film.png" alt=""/>

        </div>
    </div>

    <div className="packages" id="packages"/>

        <h1 className="heading">
            <span>T</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>s</span>
        </h1>

        <div className="box-container">
            <div className="box">
                <img src="images/europe-map.png"/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Europe </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="HTML/europe.html" className="btn"> More</a>
                </div>
            </div>

         
            <div className="box">
                <img src="images/Asia_Map.jpg" alt=""/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Asia </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="HTML/asia.html" className="btn"> More</a>
                </div>
            </div>

            <div className="box">
                <img src="images/p-3.jpg" alt=""/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Sydney </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="#" className="btn login-btn">book now</a>
                </div>
            </div>

            <div className="box">
                <img src="images/uzbflag.png" alt=""/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Uzbekistan </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="HTML/uzb.html" className="btn">book now</a>
                </div>
            </div>

            <div className="box">
                <img src="images/disney.png" alt=""/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Disneyland </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="HTML/disney.html" className="btn">More</a>
                </div>
            </div>

            <div className="box">
                <img src="images/g-9.jpg" alt=""/>
                <div className="content">
                    <h3> <i className="fas fa-map-marker-alt"></i> Egypt </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="price"> 5.600som <span>2.500.000som</span> </div>
                    <a href="#" className="btn">book now</a>
                </div>
            </div>
        </div>

    </div>

    <div className="book" id="book">

        <h1 className="heading">
            <span>B</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span className="space"></span>
            <span>n</span>
            <span>o</span>
            <span>w</span>
        </h1>

        <div className="row">
            <div className="image">
                <img src="images/book-img.svg" alt=""/>
            </div>

            <form action="">
                <div className="inputBox">
                    <h3>where to</h3>
                    <input type="text" placeholder="place name"/>
                </div>
                <div className="inputBox">
                    <h3>how many</h3>
                    <input type="number" placeholder="number of guests"/>
                </div>
                <div className="inputBox">
                    <h3>arrivals</h3>
                    <input type="date"/>
                </div>
                <div className="inputBox">
                    <h3>leaving</h3>
                    <input type="date"/>
                </div>
                <input type="submit" className="btn" value="book now"/>
            </form>
        </div>

    </div>

    <div className="services" id="services">
        <h1 className="heading">
            <span>S</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
        </h1>

        <div className="box-container">
            <div className="box">
                <i className="fas fa-hotel"></i>
                <h3>affordable hotels</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-utensils"></i>
                <h3>food and drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-bullhorn"></i>
                <h3>safty guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-globe-asia"></i>
                <h3>around the world</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-plane"></i>
                <h3>fastest travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-hiking"></i>
                <h3>adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-campground"></i>
                <h3>camping</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
                <i className="fas fa-guitar"></i>
                <h3>concerts</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                    exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
        </div>

    </div>

    <div className="contact" id="contact">
        <h1 className="heading">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
        </h1>

        <div className="row">
            <div className="image">
                <img src="images/contact-img.svg" alt=""/>
            </div>

            {/* <form action="">
                <div className="inputBox">
                    <input type="text" placeholder="name">
                    <input type="email" placeholder="email">
                </div>
                <div className="inputBox">
                    <input type="number" placeholder="number"/>
                    <input type="text" placeholder="subject"/>
                </div>
                <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" className="btn" value="send message">
            </form> */}
        </div>
    </div>

        <div className="footer">

            <div className="box-container">
                <div className="box">
                    <h3><span>T</span>RAVEL numbers</h3>
                    <a href="#"> <i className="fas fa-phone-alt"></i> +998 97 777 77 77 </a>
                    <a href="#"> <i className="fas fa-phone-alt"></i> +998 97 777 77 77 </a>
                    <a href="#"> <i className="fas fa-phone-alt"></i> +998 97 777 77 77 </a>
                    <a href="#"> <i className="fas fa-phone-alt"></i> +998 97 777 77 77 </a>
                </div>
                <div className="box">
                    <h3>Branch locations</h3>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> USA</a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> UK</a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> Poland</a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> Uzbekistan</a>
                </div>
                <div className="box">
                    <h3>Follow us</h3>
                <a href="#"> <i className="fab fa-facebook"></i> facebook</a>
                <a href="#"> <i className="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i className="fab fa-telegram"></i> telegram</a>
                <a href="#"> <i className="fab fa-twitter"></i> twitter</a>
            </div>


        </div>

        <h1 className="credit"> created by <span> Anvarov_I </span> | all rights reserved! </h1>
    </div>

    </div>
  )
}
