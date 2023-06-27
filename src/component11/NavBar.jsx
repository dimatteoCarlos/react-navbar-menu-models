import React, { useState, useRef, useEffect } from 'react';
import SocialIcon from './SocialIcon11.jsx';
import { FaBars } from 'react-icons/fa';
import tuLogo from '../assets/imgLogo.png';
import { dataLinks } from '../assets/data11/dataLinks.jsx';
import './style11.css';

export const NavBar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  const showLinks = () => {
    setToggleBtn((prev) => !toggleBtn);
  };

  useEffect(() => {
    //set the rendered height acoording to the height of the nav
    const navHeight = linksRef.current.getBoundingClientRect().height + 'px';

    if (toggleBtn) {
      linkContainerRef.current.style.height = navHeight;
      linkContainerRef.current.style.borderRadius = '0 0 80% 0';
    } else {
      linkContainerRef.current.style.height = '0px';
    }
  }, [toggleBtn]);

  return (
    <section className='nav'>
      <div className='nav-central'>
        <div className='nav-header'>
          <img src={tuLogo} alt='tu-logo' className='logo' />
          <button className='bar-btn' onClick={showLinks}>
            <FaBars />
          </button>
        </div>

        <div className='link-container ' ref={linkContainerRef}>
          <ul className='links' ref={linksRef}>
            {dataLinks.map((link, indx) => (
              <li key={link.id + indx}>
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='social'>
          <SocialIcon />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
