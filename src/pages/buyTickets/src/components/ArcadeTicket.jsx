import React from "react";
import { Calendar, Clock } from "lucide-react";
import "./ArcadeTicket.css";

const ArcadeTicket = ({ type, date, time, onBook, buttonText, buttonLink, className = "" }) => {
  const isStudent = type === "student";

  return (
    <div className={`arcade-ticket-container ${className}`}>
      {/* Main Ticket Container */}
      <div className="ticket-main">
        {/* Jagged Edges */}
        <div className="jagged-edges top"></div>
        <div className="jagged-edges bottom"></div>

        {/* Ticket Content */}
        <div className="ticket-content">
          <div className="header">
            <div className="header-title">
              <img src="./images/WhiteTextLogo.png" alt="TEDx IIT Guwahati" className="image" />
            </div>
            <div className="header-subtitle">
              {isStudent ? "⭐ IITG STUDENT PASS ⭐" : "⭐ GENERAL ADMISSION ⭐"}
            </div>
          </div>

          <div className="ticket-details">
            <div className="ticket-title">
              <h2>SEASIDE CITADEL</h2>
              <p>{isStudent ? "Special Student Access" : "General Public Access"}</p>
            </div>
            <div className="ticket-date-time">
              <div className="info">
                <Calendar className="icon" />
                <span>{date}</span>
              </div>
              <div className="info">
                <Clock className="icon" />
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="ticket-number">
            {/* Optional Ticket Number */}
          </div>

          <a href={buttonLink} className="book-button" onClick={onBook}>
            {buttonText} {/* Dynamically set button text */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArcadeTicket;
