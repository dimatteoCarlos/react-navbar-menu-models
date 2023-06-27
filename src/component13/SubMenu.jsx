import { useGlobalContext } from './StripeProvider';
import { nanoid } from 'nanoid';
import { FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const SubMenu = ({ show }) => {
  const { data, isSubMenuOpen, activePage, place } = useGlobalContext();

  const pageLink = data.find((link) => link.page.toLowerCase() === activePage);

  const { links } = pageLink;
  const { center, bottom } = place;
  const numCols = links.length;

  return (
    <>
      <ul
        className={`subMenu ${isSubMenuOpen ? 'show' : 'noShow'}`}
        style={{
          gridTemplateColumns: `repeat(${numCols},minmax(auto,${
            40 * numCols
          }px))`,
          left: `${center}px`,
          top: `${bottom}px`,
        }}
      >
        {links.map(({ label, icon, url }) => {
          return (
            <li key={label + nanoid()} className='pageBtn'>
              <button className='subLink'>
                <a href={url} className='pageBtn'>
                  <span className='icon '>
                    <IconTextProvider>{icon}</IconTextProvider>
                  </span>
                  <span className='pageBtn'>{label}</span>
                  {
                    <FaArrowRight
                      className='FaArrowRight'
                      size='2rem'
                      fill='black'
                    ></FaArrowRight>
                  }
                </a>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SubMenu;
/**********IconContext********/
export const IconTextProvider = ({ children }) => {

  return (
    <>
      <IconContext.Provider
        value={{ className: ` icon Icon-${Math.ceil(Math.random() * 3)}` }}
      >
        {children}
      </IconContext.Provider>
    </>
  );
};
