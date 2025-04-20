import {useState , useEffect} from "react";
import Speakers from "./speakers.js";
import Speakers2 from "./speakers2.js";
import styles from "./speakers2.module.css";

<<<<<<< HEAD
const Navbar = () => {
=======
const Speaker = () => {
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1001 && window.innerWidth >= 501 );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1001 && window.innerWidth >= 501);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <>
        <div className={styles.speaker}>
            {isSmallScreen ? <Speakers2 /> : <Speakers />}
        </div>
      </>
        
    );
}
 
<<<<<<< HEAD
export default Navbar;
=======
export default Speaker;
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
