import { useGlobalContext } from './StripeProvider.jsx';

import phone from '../assets/data13/images/phone.svg';

export const ShowCase = () => {
  const { data, closeSubMenu, setIsSideBarOpen } = useGlobalContext();

  const { titleInfo, coreInfo, buttonText } = data[3].showCaseInfo;

  return (
    <>
      <section
        className='showCase'
        onMouseOver={closeSubMenu}
        onClick={() => setIsSideBarOpen(false)}
      >
        <div className='showCaseContent'>
          <article className='showCaseInfo'>
            <h1 className='titleInfo'>{titleInfo}</h1>
            <p className='coreInfo'>{coreInfo}</p>
            <button className='showCaseBtn'>{buttonText}</button>
          </article>
          <article className='phoneImg'>
            <img src={phone} alt='cellPhoneImg' />
          </article>
        </div>
      </section>
    </>
  );
};
