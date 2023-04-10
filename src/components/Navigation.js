import React from 'react';

export default function Nav() {
  const navStyle = {
    color: '#FFA62B',
    fontSize: 'x-large',
    fontWeight: 'bold',
  };

  return (
    <nav className="navigation  justify-space-between-lg justify-center align-center">
        <ul>
        <li>
          <a className="navLink" style={navStyle} href="#home">Home</a>
        </li>
        <li>
          <a className="navLink" href="#aboutMe">About Me</a>
        </li>
        <li>
          <a className="navLink" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a className="navLink" href="#contact">Contact</a>
        </li>
        <li>
          <a className="navLink" href="#resume">Resume</a>
        </li>
        </ul>
    </nav>
  );
}
