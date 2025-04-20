import { useState, useEffect } from "react";
import Styles from './ScrollButton.module.css';
import { FaAngleUp } from "react-icons/fa";

const ScrollButton = () => {
    const [visibile, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);


    const handleScroll = () => {
        let pos = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = (pos/ height) * 100;

        setScrollProgress(progress);
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 100){
            setVisible(true);
        }
        else if(scrolled <= 100){
            setVisible(false)
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        });
    }
    return (
       <> 
               <div className={Styles.progressWrap} style={{display: visibile ? 'flex': 'none'}} onClick= {scrollToTop}>
                   <FaAngleUp  style={{color: 'red'}}/>
               </div>
        </>
    );
    
}
 
export default ScrollButton;