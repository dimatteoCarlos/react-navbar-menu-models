//SocialIcon.jsx
import './socialIcon.css';

import {
  FaFacebook,
  // FaInstagram,
  FaTwitter,
  // FaYoutube,
  // FaDiscord,
  FaLinkedin,
  // FaTelegram,
  FaBehance,
  FaSketch,
} from 'react-icons/fa';

export const socialObj = [
  {
    icon: <FaFacebook />,
    iconId: FaFacebook,
    iconName: 'FaFacebook',
    iconUrl: 'https://facebook.com',
  },
  // {
  //   icon: <FaInstagram />,
  //   iconId: FaInstagram,
  //   iconName: 'FaInstagram',
  //   iconUrl: 'https://instagram.com',
  // },
  {
    icon: <FaTwitter />,
    iconId: FaTwitter,
    iconName: 'FaTwitter',
    iconUrl: 'https://twitter.com',
  },
  // {
  //   icon: <FaYoutube />,
  //   iconId: FaYoutube,
  //   iconName: 'FaYoutube',
  //   iconUrl: 'https://youtube.com',
  // },
  // {
  //   icon: <FaDiscord />,
  //   iconId: FaDiscord,
  //   iconName: 'FaDiscord',
  //   iconUrl: 'https://discord.com',
  // },
  // {
  //   icon: <FaTelegram />,
  //   iconId: FaTelegram,
  //   iconName: 'FaTelegram',
  //   iconUrl: 'https://telegram.com',
  // },
  {
    icon: <FaLinkedin />,
    iconId: FaLinkedin,
    iconName: 'FaLinkedin',
    iconUrl: 'https://linkedin.com',
  },
  {
    icon: <FaSketch />,
    iconId: FaSketch,
    iconName: 'FaSketch',
    iconUrl: 'https://sketch.com',
  },
  {
    icon: <FaBehance />,
    iconId: FaBehance,
    iconName: 'FaBehance',
    iconUrl: 'https://behance.com',
  },
];

export function SocialIcon() {
  return (
    <ul className='social'>
      {socialObj.map((item, indx) => {
        const iconClass = `i ${item.iconId.name
          .substring(0, 2)
          .toLowerCase()}-${item.iconId.name.substring(2).toLowerCase()}`;
        return (
          <li key={indx}>
            <a
              href={item.iconUrl}
              className={iconClass}
              rel='noreferrer'
              target='_blank'
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialIcon;
