import { useContext, createContext, useState } from 'react';
import data from '../assets/data13/data13.js';

const StripeContext = createContext();

const StripeProvider = ({ children }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [activePage, setActivePage] = useState('');

  const [place, setPlace] = useState({});

  function centerX(x) {
    return (
      (x.getBoundingClientRect().right + x.getBoundingClientRect().left) / 2
    );
  }

  const getPageInfo = (e) => {
    const placeInfoCntr = centerX(e.target);

    const bottom = e.target.getBoundingClientRect().bottom - 48;

    const basePositionX = document
      .querySelector('.pages')
      .getBoundingClientRect().x;

    const center = placeInfoCntr - basePositionX * 1;

    setPlace({ center, bottom });

    const textContent = e.target.textContent;
    setActivePage(e.target.textContent.toLowerCase());
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <>
      <StripeContext.Provider
        value={{
          data,
          isSubMenuOpen,
          setIsSubMenuOpen,
          activePage,
          setActivePage,
          getPageInfo,
          place,
          setPlace,
          closeSubMenu,
          isSideBarOpen,
          setIsSideBarOpen,
        }}
      >
        {children}
      </StripeContext.Provider>
    </>
  );
};

export default StripeProvider;
export { StripeContext };

export const useGlobalContext = () => {
  return useContext(StripeContext);
};
