import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container box-container ">
        <div className="box1">
          <h3>
            <span>T</span>RAVEL numbers
          </h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone-alt me-3"></i> +998 97 777 77 77{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone-alt me-3"></i> +998 97 777 77 77{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone-alt me-3"></i> +998 97 777 77 77{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone-alt me-3"></i> +998 97 777 77 77{" "}
          </a>
        </div>
        <div className="box1">
          <h3>Branch locations</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt me-3"></i> USA
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt me-3"></i> UK
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt me-3"></i> Poland
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt me-3"></i> Uzbekistan
          </a>
        </div>
        <div className="box1">
          <h3>Follow us</h3>
          <a href="#">
            {" "}
            <i className="fab fa-facebook me-3"></i> Facebook
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-instagram me-3"></i> Instagram
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-telegram me-3"></i> Telegram
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter me-3"></i> Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
