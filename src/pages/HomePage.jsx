import InfoApp from './InfoApp.jsx';
import './infoApp.css';
import { datosApp } from '../assets/dataApp';
import Title from '../components/Title.jsx';

export const HomePage = () => {
  const newPageTitle = 'React App';
  const title = `Nav Bar Menu and Modals / React Applications`;
  const subTitle = '';

  <Title newPageTitle={newPageTitle} title={title} subtitle={subTitle} />;

  return (
    <section id='homePage-container'>
      {datosApp.map((obj) => {
        return <InfoApp key={obj.id} {...obj}></InfoApp>;
      })}
    </section>
  );
};
