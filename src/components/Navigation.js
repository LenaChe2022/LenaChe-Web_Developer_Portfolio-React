import React, { useState } from 'react';

export default function Nav() {
  const navStyle = {
    color: '#FFA62B',
    fontSize: 'x-large',
    fontWeight: 'bold',
  };

  const [homestyle, setHomestyle] = useState({});
  const [aboutmestyle, setAboutmestyle] = useState({});
  const [contactstyle, setContactstyle] = useState({});
  const [portfoliostyle, setPortfoliostyle] = useState({});
  const [resumestyle, setResumestyle] = useState({});

  const handleHomeClick = () => {
    setHomestyle(navStyle);
    setAboutmestyle({});
    setContactstyle({});
    setPortfoliostyle({});
    setResumestyle({});
  };

  const handleAboutmeClick = () => {
    setAboutmestyle(navStyle);
    setHomestyle({});
    setContactstyle({});
    setPortfoliostyle({});
    setResumestyle({});
  };

  const handlePortfolioClick = () => {
    setPortfoliostyle(navStyle);
    setAboutmestyle({});
    setHomestyle({});
    setContactstyle({});
    setResumestyle({});
  };

  const handleContactClick = () => {
    setContactstyle(navStyle);
    setHomestyle({});
    setAboutmestyle({});
    setPortfoliostyle({});
    setResumestyle({});
  };

  const handleResumeClick = () => {
    setResumestyle(navStyle);
    setHomestyle({});
    setAboutmestyle({});
    setPortfoliostyle({});
    setContactstyle({});
  };

  return (
    <nav className="navigation  justify-space-between-lg justify-center align-center">
        <ul>
        <li>
          <a className="navLink" style={homestyle} href="#home" onClick={handleHomeClick}>Home</a>
        </li>
        <li>
          <a className="navLink" style={aboutmestyle} href="#aboutMe" onClick={handleAboutmeClick}>About Me</a>
        </li>
        <li>
          <a className="navLink" style={portfoliostyle} href="#portfolio" onClick={handlePortfolioClick}>Portfolio</a>
        </li>
        <li>
          <a className="navLink" style={contactstyle} href="#contact" onClick={handleContactClick}>Contact</a>
        </li>
        <li>
          <a className="navLink" style={resumestyle} href="#resume" onClick={handleResumeClick}>Resume</a>
        </li>
        </ul>
    </nav>
  );
}
