import React, { useState } from 'react';
import Home from './Home';
import Modal from './Modal';
import SideBar from './SideBar';
import './style12.css';

export const SideBarModal = () => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Home
        click={click}
        setClick={setClick}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <SideBar click={click} setClick={setClick} />
    </div>
  );
};

export default SideBarModal;
