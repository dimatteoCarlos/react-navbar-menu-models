import { Outlet, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './layoutPage.css';

const LayoutPage = () => {
  return (
    <>
      <div className='mainTitle'>
        <Link className='homeBtn' to='/'>
          <AiFillHome className='icon' fill='#6f0a97' />
        </Link>

        <h3 className='title' style={{ color: '#6f0a97' }}>
          NavBar Menu React Applications
        </h3>
      </div>

      <Outlet />
    </>
  );
};

export default LayoutPage;
