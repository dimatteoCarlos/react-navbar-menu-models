import React from 'react';
import './HamburgerButton.css';
const HamburgerButton = ({click}) => {
const classOpen=click?'open':'';

  return (
    <>
      <div className={`icon nav-icon-5 ${classOpen}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default HamburgerButton;
