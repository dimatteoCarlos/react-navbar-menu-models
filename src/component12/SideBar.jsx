import React from 'react';
import Logo from '../assets/imgLogo.png';
import { links } from '../assets/data12/data.js';
import { IconContext } from 'react-icons';

const SideBar = ({ click, setClick }) => {
  return (
    <aside className={click ? 'show' : ''}>
      {
        <>
          <img className='logo' src={Logo} alt='tuLogo' />
          <ul className='links'>
            {links.map((link, indx) => {
              const { url, icon, text } = link;

              return (
                <li key={indx}>
                  <IconModifier>
                    <a href={url} className='i'>
                      {icon}
                      <span>{text}</span>
                    </a>
                  </IconModifier>
                </li>
              );
            })}
          </ul>
        </>
      }
    </aside>
  );
};

export default SideBar;
/********************** */
//Since icons are rendered programatically from a data file; this way is possible to change icon's attributes
export function IconModifier({ children }) {
  return (
    <div>
      <IconContext.Provider value={{ className: 'myReact-icons' }}>
        {children}
      </IconContext.Provider>
    </div>
  );
}
