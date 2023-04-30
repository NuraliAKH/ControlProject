import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import './style.css'
export default function Main() {
  function searchToggle() {

  }
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
          <p className='search-input'>
            <input type="text"/>
            <BiSearch />
          </p>
          <p><BsFillPersonFill /></p> 

        </div>

      </header>
    </div>
  )
}
