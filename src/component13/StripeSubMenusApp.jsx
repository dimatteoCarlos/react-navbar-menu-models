import React from 'react';
import { StripeNavBar } from './StripeNavBar.jsx';
import { ShowCase } from './ShowCase.jsx';
import SideBar from './SideBar';
import './stripeSubMenu.css';
import StripeProvider from './StripeProvider.jsx';
export const StripeSubMenusApp = () => {
  return (
    <>
      <StripeProvider>
        <StripeNavBar />
        <ShowCase />
        <SideBar />
      </StripeProvider>
    </>
  );
};

export default StripeSubMenusApp;
