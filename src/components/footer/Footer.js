import React from 'react';
import './Footer.css';
import  '../scroll/ScrollButton';
import { NavLink } from "react-router-dom";
import ScrollButton from '../scroll/ScrollButton';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-outer">
      <div className="row1">
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
              <text x="20" y="50" font-family="Arial, sans-serif" font-weight="bold" font-size="40">
                <tspan fill="red">TED</tspan>
                <tspan fill="red">x</tspan>
                <tspan fill="white">IITGuwahati</tspan>
              </text>
            </svg>*/}
            <a href="Home">
            <NavLink to="/" onClick={scrollToTop}><img src="./images/WhiteTextLogo.png" alt="TEDx IIT Guwahati" className="footer-logo" /></NavLink>
            </a>
           

          </div>
      <div className="footer-row1">
        {/* About TED Section */}
        <div className="footer-col1">
          <h4 className="footer-heading footer-link">What is TEDx?</h4>
      <div className="footer-ted-desc">
            This independent TEDx event is organized under license from TED.
            In the same spirit of spreading ideas, TED has created a program called TEDx.
            TEDx is an independently organized program of local events that bring together an audience in a TED-like experience. Our event is TEDxIITGuwahati, where x means TED event organized independently.
            At TEDxIITGuwahati, we combine videos of TED talks and live speakers to generate a deep conversation and connection between attendees. TED gives general guidelines for the TEDx program, but each individual TEDx is organized autonomously (subject to certain guidelines).

            TEDxIITGuwahati is a non-profit organization made up of volunteers. Their mission is to spread transformative ideas.
         
          </div> 
        </div>

        {/* Quick Links Section */}
        <div className="footer-col2">
          <h4 className="footer-heading ">Quick Links</h4>
          <div>
            <NavLink to="/Events"onClick={scrollToTop}>Events</NavLink>
            <NavLink to="AboutUs"onClick={scrollToTop}>About Us</NavLink>
            <NavLink to="/BuyTickets"onClick={scrollToTop}>Buy Tickets</NavLink>
            <NavLink to="/Privacy"onClick={scrollToTop}>Privacy Policies</NavLink>
            <NavLink to="/Terms"onClick={scrollToTop}>Terms and Conditions</NavLink>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-col3">
          
          <div className='row2'>
            <h4 className="footer-heading footer-link">Follow Us</h4>
       
            <div className="footer-social">



              <a href="https://www.instagram.com/tedxiitguwahati/" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>            </a>
              <a href="https://www.linkedin.com/company/tedx-iit-guwahati/" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </a>
              <a href="https://twitter.com/x/migrate?tok=7b2265223a222f74656478696974673f743d70484c706d69794959697562636d6f5543755172504126733d3038222c2274223a313733343534383630317dc03a35f92880d72357f657e2831f620b" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </a>
              <a href="https://www.facebook.com/TEDxIITGuwahati?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
              <a href="https://tedxiitguwahati.medium.com/" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path></svg>
              </a>
              <a href="https://www.threads.net/@tedxiitguwahati" target="_blank" rel="noopener noreferrer" className="footer-icon igicon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path></svg>
              </a>

            </div>
            
            <span className="footer-email">Mail us at <a href="mailto:iitg.tedx@gmail.com" style={{ color: 'red' }}>iitg.tedx@gmail.com</a></span>

           
          </div>
        </div>
      </div>
      <div className='footer-row2'>
        <div className='footer-copyright'>
          @ Copyright by TEDxIITGuwahati.This independent TEDx event is operated under license from TED.
        </div>
      </div>
    </div>
   
  );
};

export default Footer;
