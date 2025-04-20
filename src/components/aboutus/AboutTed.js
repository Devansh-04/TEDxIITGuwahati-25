import React, { useState, useEffect } from "react";
import "./AboutTed.css";

const AboutTed = () => {
  const [content, setContent] = useState("TED, founded in 1984, is a global community dedicated to sharing \"ideas worth spreading.\" Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue.");
  const [activeTab, setActiveTab] = useState("AboutTED");

  useEffect(() => {
    const tabs = [
      { key: "AboutTED", text: "TED, founded in 1984, is a global community dedicated to sharing \"ideas worth spreading.\" Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue." },
      { key: "AboutTEDx", text: "Since 1984, TED has been a global platform for \"ideas worth spreading,\" uniting people from all disciplines and cultures to foster understanding. Owned by a nonprofit foundation, TED believes in the power of ideas to transform lives and the world. Its TEDx program empowers communities to host local TED-like events, sparking conversation and connection." },
      { key: "AboutTEDxIITG", text: "TEDxIITGuwahati, launched in 2016, is an annual event organized by IIT Guwahati students. Run by passionate volunteers, it offers a TED-like experience, fostering dialogue and collaboration through engaging talks and interactive sessions for the IIT Guwahati and wider Indian communities." },
    ];

    let currentIndex = 0;

    // const interval = setInterval(() => {
    //   currentIndex = (currentIndex + 1) % tabs.length;
    //   setContent(tabs[currentIndex].text);
    //   setActiveTab(tabs[currentIndex].key);
    // }, 10000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="maintitle">The World of TED</p>
      <div className="containerr">
        <div></div>
        <div className="about_container">

          <div className="content-container">
            <div className="button-container">
              <button
                className={`tab-button ${activeTab === "AboutTED" ? "active" : ""}`}
                onClick={() => {
                  setContent("TED, founded in 1984, is a global community dedicated to sharing \"ideas change everything.\" Owned by a nonprofit foundation, TED aims to make great ideas accessible and spark meaningful conversations. Through its TEDx program, local communities and organizations can host TED-like events to foster connection and dialogue.");
                  setActiveTab("AboutTED");
                }}
              >
                <p>About TED</p>
              </button>
              <button
                className={`tab-button ${activeTab === "AboutTEDx" ? "active" : ""}`}
                onClick={() => {
                  setContent("Since 1984, TED has been a global platform for \"ideas worth spreading,\" uniting people from all disciplines and cultures to foster understanding. Owned by a nonprofit foundation, TED believes in the power of ideas to transform lives and the world. Its TEDx program empowers communities to host local TED-like events, sparking conversation and connection.");
                  setActiveTab("AboutTEDx");
                }}
              >
                <p>About TEDx</p>
              </button>
              <button
                className={`tab-button ${activeTab === "AboutTEDxIITG" ? "active" : ""}`}
                onClick={() => {
                  setContent("TEDxIITGuwahati, launched in 2016, is an annual event organized by IIT Guwahati students. Run by passionate volunteers, it offers a TED-like experience, fostering dialogue and collaboration through engaging talks and interactive sessions for IIT Guwahati and wider Indian communities.");
                  setActiveTab("AboutTEDxIITG");
                }}
              >
                <p>About TEDxIITGuwahati</p>
              </button>
            </div>
            <div className="boxdiv">
              <div className="box">{content}</div>
            </div>

          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AboutTed;
