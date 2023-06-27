import HamburgerButton from './HamburgerButton.jsx';
import SocialIcon from '../components/SocialIcon.jsx';

const Home = ({ click, setClick, showModal, setShowModal }) => {
  const clickBtn = () => {
    setClick((prev) => !click);
  };
  const getModal = () => {
    setShowModal((prev) => !showModal);
  };

  return (
    <main>
      <div className='btnContainer'>
        <button
          className={`btn sideBarBtn ${click ? 'show' : ''}`}
          onClick={clickBtn}
        >
          <HamburgerButton click={click} />
        </button>
      </div>

      <button
        type='button'
        className={`${!showModal ? 'showModal' : 'noShow'}`}
        onClick={getModal}
      >
        show modal
      </button>

      <SocialIcon />
    </main>
  );
};

export default Home;
