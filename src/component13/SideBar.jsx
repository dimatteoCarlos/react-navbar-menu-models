import { useGlobalContext } from './StripeProvider.jsx';
import { FaTimes } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { IconTextProvider } from './SubMenu.jsx';
import StripeBlueLogo from '../assets/data13/images/blueLogo.svg';
import SignInBtn from './SignInBtn.jsx';

const SideBar = () => {
  const {
    data: dataMenu,
    isSideBarOpen,
    setIsSideBarOpen,
  } = useGlobalContext();

  return (
    <>
      <aside className={`sideBarCard ${isSideBarOpen ? 'show' : 'noShow'}`}>
        <div className='sideBarHeader'>
          <a href='#'>
            <img
              src={StripeBlueLogo}
              alt='Stripe Blue Logo'
              className='blueLogo'
            />
          </a>

          <button
            className='closeBtn'
            onClick={(prev) => setIsSideBarOpen(!prev)}
          >
            <FaTimes className='closeBtn' />
          </button>
        </div>

        {dataMenu.map(({ links, page }, indx) => {
          if (!!page) {
            return (
              <article className='sideBarPageLinks' key={indx + '-' + nanoid()}>
                <h4 className='sideBarPage'>{page}</h4>
                <div className='subLinks'>
                  {links.map(({ label, icon, url }, ind) => {
                    return (
                      <a href={url} key={nanoid()} className='pageBtn'>
                        <IconTextProvider>{icon}</IconTextProvider>
                        <span className='pageBtn'>{label}</span>
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          } else {
            return;
          }
        })}

        <div className='sideBarSignIn'>
          <SignInBtn textBtn={'Sign in'} textColor={'white'} />
        </div>
      </aside>
    </>
  );
};
export default SideBar;
