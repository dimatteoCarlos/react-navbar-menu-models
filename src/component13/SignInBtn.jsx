import { FaChevronRight, FaArrowRight } from 'react-icons/fa';
import './stripeSubMenu.css';
const SignInBtn = ({ textBtn, textColor = 'red' }) => {
  
  return (
    <div>
      <button className='badge signIn' style={{ color: textColor }}>
        {textBtn}
        <FaChevronRight className='chevron'></FaChevronRight>
        <FaArrowRight className='arrow'></FaArrowRight>
      </button>
    </div>
  );
};

export default SignInBtn;
