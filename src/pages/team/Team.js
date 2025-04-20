import Teamdesktop from "./Teamdesktop";
import Teammobile from "./Teammobile";
import {useState, useEffect} from "react";
import styles from "./Team.module.css";
import ScrollButton from '../../components/scroll/ScrollButton';

const Team = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
      },[])

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 570);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.Team}>
      {isSmallScreen ? <Teammobile /> : <Teamdesktop />}
    </div>
    <ScrollButton/>
    </>
  );
}
 
export default Team;