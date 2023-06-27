import React from 'react';
import Logo from '../assets/data13/images/logo.svg';
import { FaBars } from 'react-icons/fa';
import PageMenu from './PageMenu';
import { useGlobalContext } from './StripeProvider.jsx';
import SignInBtn from './SignInBtn';

export const StripeNavBar = () => {
  const { setIsSideBarOpen, closeSubMenu } = useGlobalContext();

  function sideBarHandler() {
    closeSubMenu();
    setIsSideBarOpen((prev) => !prev);
  }
  return (
    <>
      <nav className='nav'>
        <div className='navContainer'>
          <div className='navHeader'>
            <img src={Logo} alt='stripeLogo' className='navLogo' />
            <button className='btn button menuBtn' onClick={sideBarHandler}>
              <FaBars size='1.2rem' className='icon' />
            </button>
          </div>

          <div className='navLinks'>
            <PageMenu></PageMenu>
          </div>
          <SignInBtn textBtn={'Sign in'} textColor={'white'} />
        </div>
      </nav>
    </>
  );
};
