import {useState , useEffect} from "react";
import Navbardesktop from "./navbardesktop";
import Navbarmobile from "./navbarmobile";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 993);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 993);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <>
         {/* {isSmallScreen && <div className={styles.navtop}><img src="./images/WhiteTextLogo.png"></img></div>} */}
         <div className={styles.navbar}>
            {isSmallScreen ? <Navbarmobile /> : <Navbardesktop />}
        </div>
      </>
        
    );
}
 
export default Navbar;