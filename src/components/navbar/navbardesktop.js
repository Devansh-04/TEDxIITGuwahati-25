import {NavLink} from "react-router-dom";
import styles from "./navbar.module.css";
import { useState } from "react";
const Navbardesktop = () => {
    const showActivePage = (isActive,color)=>{return {color: isActive?color:''}}
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    return (
        <div className={styles.navbardesktop}>
                    <div className={styles.img}><NavLink to="/" onClick={scrollToTop}><img src="./images/WhiteTextLogo.png" alt="Home Logo" /></NavLink></div>
                    <div className={styles.div1}><NavLink to="/" onClick={scrollToTop} style={({isActive})=>showActivePage(isActive,'red')}>Home</NavLink></div>
                    <div className={styles.div2}><NavLink to="/AboutUs" onClick={scrollToTop} style={({isActive})=>showActivePage(isActive,'red')}>About Us</NavLink></div>
                    <div className={styles.div3}><NavLink to="/Team" onClick={scrollToTop}style={({isActive})=>showActivePage(isActive,'red')}>Team</NavLink></div>
                    <div className={styles.div4}><NavLink to="/Events"onClick={scrollToTop} style={({isActive})=>showActivePage(isActive,'red')}>Events</NavLink></div>
                    
                    <div className={styles.div6}><NavLink to="/ContactUs" onClick={scrollToTop} style={({isActive})=>showActivePage(isActive,'red')}>Contact Us</NavLink></div>
                    <div className={styles.div7}><a href="https://www.instagram.com/tedxiitguwahati/"><img src="images/Instalogo.png"></img></a></div>
                    <div className={styles.div5}><NavLink to="/buyTickets">
                    <div className={styles.booknow}>Book Now</div></NavLink></div>




                    
         </div>
    );
}
 
export default Navbardesktop;