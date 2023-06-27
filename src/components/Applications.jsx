//-----Nav Bar Menus Models
//11 NavBar Menu Model 01
import { NavBar } from '../component11/NavBar';
//12 SideBarModal Menu Model 02
import { SideBarModal } from '../component12/SideBarModal';
//13 Stripe SubMenu UI App / stripe.com
import { StripeSubMenusApp as StripeMenu } from '../component13/StripeSubMenusApp';
import { useParams } from 'react-router-dom';

const Applications = () => {
  const { appId } = useParams();

  return (
    <>
      {appId === '11' && <NavBar />}
      {appId === '11_1' && <NavBar />}
      {appId === '12' && <SideBarModal />}
      {appId === '13' && <StripeMenu />}
      {appId === '13_1' ? <StripeMenu /> : null}
    </>
  );
};

export default Applications;
