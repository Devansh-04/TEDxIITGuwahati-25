import React, { useState, useEffect } from 'react';
import ArcadeTicket from './components/ArcadeTicket';
import ExclusiveBenefits from './components/ExclusiveBenefits';
import Location from '../../../components/location/location';
import './BuyTickets.css';


function BuyTickets() {
  useEffect(()=>{
      window.scrollTo(0, 0);
        },[])
  
  const handleBook = () => {
    // alert('Booking functionality will be implemented here!');
  };

  return (
    <div className="app-container">
      {/* <Navbar /> */}
      
      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title">Reserve Your Seat!</h1>
          <p className="hero-description">
          Make It Yours – Book Your Experience
          </p> 
        </div>

        <div className="content-grid">
          <div className="ticket-container">
            <div className="ticket-wrapper">
              <ArcadeTicket
                type="student"
                date="Feb 9, 2025"
                time="9:00 AM"
                onBook={handleBook}
                buttonText="CLOSED"
                // buttonLink="https://unstop.com/p/tedxiitguwahati-iitg-student-pass-tedxiitguwahati-1377729" 
                className="ticket student-ticket"
              />
              <ArcadeTicket
                type="general"
                date="Feb 9, 2025"
                time="9:00 AM"
                onBook={handleBook}
                buttonText="CLOSED" 
                // buttonLink="https://mstats.dare2compete.com/CL0/https:%2F%2Funstop.com%2Fp%2Ftedxiitguwahati-general-pass-tedxiitguwahati-1379035%3Futm_campaign=site-emails%26utm_medium=d2c-automated%26utm_source=you-did-it-invite-only-mode-activated-for-tedxiitguwahati-general-pass/1/01090194b16267f7-884a7dd1-13e8-4528-896c-273050282595-000000/kULGVM4m-Lo8_d_uzwJpWVWTBL-chzQCgdW7uuD6aXA=192" 
                className="ticket general-ticket"
              />
            </div>
          </div>
          <div className="benefits-container">
            <ExclusiveBenefits />
          </div>
        </div>
      </main>
      <Location/>
    </div>
  );
}

export default BuyTickets;