import React from "react";
import "./contact.css";
import Rasm from '../images/contact-img.svg'

export default function Contact() {
  return (
    <section className="contact container" id="contact">
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
        <div className="image col-6">
          <img src={Rasm} alt="" />
        </div>
        <form action="" className=" col-6">
          <div className="inputBox">
            <input type="text" placeholder="Name" className="form-control" />
            <input type="email" placeholder="Email" className="form-control" />
          </div>
          <div className="inputBox">
            <input type="Number" placeholder="Number" className="form-control" />
          </div>
          <textarea placeholder="Message" name="" id="" cols="20" rows="10" className="form-control"></textarea>
          <button className="btn btn-warning">Send Message</button>
        </form>
      </div>
    </section>
  );
}
