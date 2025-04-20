import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./timeline.css";
import red from "./pics/red.jpg";

const Timeline = () => {
  const timelineItems = [
    { title: "Alphabet 1", year: "2011", description: "lorem" },
    { title: "Alphabet 2", year: "2012", description: "lorem" },
    { title: "Alphabet 3", year: "2013", description: "lorem" },
    { title: "Alphabet 4", year: "2014", description: "lorem" },
    { title: "Alphabet 5", year: "2015", description: "lorem" },
  ];

  return (
    <div className="timeline">
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          year={item.year}
          description={item.description}
          isLeft={index % 2 === 0} // Alternate between left and right
        />
      ))}
    </div>
  );
};

const TimelineItem = ({ title, year, description, isLeft }) => {
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger when 10% visible
  return (
    <div
      ref={ref}
      className={`container ${isLeft ? "left-container" : "right-container"} ${
        inView ? "visible" : ""
      }`}
    >
      <img src={red} alt="Icon" />
      <div className="text-box">
        <h2>{title}</h2>
        <small>{year}</small>
        <p>{description}</p>
        <span
          className={isLeft ? "left-container-arrow" : "right-container-arrow"}
        ></span>
      </div>
    </div>
  );
};

export default Timeline;
