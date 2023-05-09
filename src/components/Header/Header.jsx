import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import Modal from 'react-modal';
import './style.css'
Modal.setAppElement('#root');

export default function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>

      <header>

        <a href="#" className="logo"><span>T</span>ravel</a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#encient">Encient Places</a>
          <a href="#packages">Tours</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons d-flex">
          <p onClick={openModal}><BsFillPersonFill /></p>
          <Modal className="Modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
            <h2>Log-in</h2>
            <input className='form-control' type="text" placeholder='enter your email'/>
            <input className='form-control my-3' type="password" placeholder='enter your password'/>
            <button onClick={closeModal}>Login Now</button>
            <p className='text-start'>forget password? <span>click here</span></p>
            <p className='text-start'>don't have and account? <span>register now</span></p>

          </Modal>

        </div>

      </header>
    </div>
  )
}
