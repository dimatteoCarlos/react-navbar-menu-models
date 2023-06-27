import { useGlobalContext } from './StripeProvider';
import { nanoid } from 'nanoid';
import SubMenu from './SubMenu';

const PageMenu = () => {
  const { data, isSubMenuOpen, getPageInfo, closeSubMenu } = useGlobalContext();

  const showSubMenu = (e) => {
    getPageInfo(e);
  };

  return (
    <>
      <ul className='pages'>
        {data.map((page) => (
          <li key={nanoid()} className='pageBtnContainer'>
            <button
              className='pageBtn'
              onMouseOver={showSubMenu}
              onClick={showSubMenu}
              onMouseLeave={closeSubMenu}
            >
              {page.page}
            </button>
          </li>
        ))}
      </ul>

      {isSubMenuOpen && (
        <SubMenu show={isSubMenuOpen ? 'show' : 'noShow'}></SubMenu>
      )}
    </>
  );
};

export default PageMenu;
