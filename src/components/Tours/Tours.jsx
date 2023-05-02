import React from "react";
import "./tours.css";
import rasm1 from "../images/europe-map.png";
import rasm2 from "../images/Asia_Map.jpg";
import rasm3 from "../images/p-3.jpg";
import rasm4 from "../images/uzbflag.png";
import rasm5 from "../images/disney.png";
import rasm6 from "../images/g-9.jpg";
import { Link } from "react-router-dom";
export default function Tours() {
  return (
    <section className="packages container" id="packages">
      <h1 className="heading">
        <span>T</span>
        <span>o</span>
        <span>u</span>
        <span>r</span>
        <span>s</span>
      </h1>

      <div className="box-container">
        <div className="salom">
          <img src={rasm1} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Europe{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <a href="HTML/europe.html" className="btn btn-warning">
              {" "}
              More
            </a>
          </div>
        </div>

        <div className="salom">
          <img src={rasm2} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Asia{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <Link to={"/asia"}>
            <a href="" className="btn btn-warning">
              {" "}
              More
            </a></Link>
          </div>
        </div>

        <div className="salom">
          <img src={rasm3} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Sydney{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <a href="#" className="btn btn-warning login-btn btn-warning">
              book now
            </a>
          </div>
        </div>

        <div className="salom">
          <img src={rasm4} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Uzbekistan{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <a href="HTML/uzb.html" className="btn btn-warning">
              book now
            </a>
          </div>
        </div>

        <div className="salom">
          <img src={rasm5} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Disneyland{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <a href="HTML/disney.html" className="btn btn-warning">
              More
            </a>
          </div>
        </div>

        <div className="salom">
          <img src={rasm6} />
          <div className="content">
            <h3>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Egypt{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="price">
              {" "}
              5.600som <span>2.500.000som</span>{" "}
            </div>
            <a href="#" className="btn btn-warning">
              book now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
