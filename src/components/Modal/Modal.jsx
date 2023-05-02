import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsFillPersonFill } from 'react-icons/bs'


Modal.setAppElement('#root');

function MyModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}><BsFillPersonFill/></button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default MyModal;
