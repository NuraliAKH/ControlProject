import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import './style.css'
export default function Main() {
  return (
    <div>
      <header>

        <a href="#" className="logo"><span>T</span>ravel</a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#packages">Tours</a>
          <a href="#book">Book</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons d-flex">
          <p><BiSearch/></p>
          <p><BsFillPersonFill/></p>
        </div>
        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" className="fas fa-search"></label>
        </form>
      </header>
    </div>
  )
}
