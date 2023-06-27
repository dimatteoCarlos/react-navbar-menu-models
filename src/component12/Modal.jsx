import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div className='modalOverlay'>
          <div className='modalContainer'>
            <h3>modal content</h3>

            <button type='button' className='btn closeBtn' onClick={closeModal}>
              <FaTimes className='icon' />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
