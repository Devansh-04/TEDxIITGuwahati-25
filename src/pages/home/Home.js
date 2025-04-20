import styles from './home.module.css'
import Schedule from './schedule'
import Timeline from './timeline'
import ScrollButton from '../../components/scroll/ScrollButton';
import Speaker from '../../components/speakers/speaker'
import { useEffect } from 'react';
import Title from '../../components/home/Title';
import MerchandiseComponent from '../../components/home/merch';
const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

  return (
    <>
      <div><Title/></div>
      <div><Speaker /></div>
      <ScrollButton/>
<<<<<<< HEAD
      <MerchandiseComponent/>
=======
      <Speaker />
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
    </>
  );
}

export default Home;