import React from 'react';

export default function Nav() {

  return (
    <nav className="navigation  justify-space-between-lg justify-center align-center">
        <ul>
        <li>
          <a className="navLink" href="#">Home</a>
        </li>
        <li>
          <a className="navLink" href="#">About Me</a>
        </li>
        <li>
          <a className="navLink" href="#">Portfolio</a>
        </li>
        <li>
          <a className="navLink" href="#">Contact</a>
        </li>
        <li>
          <a className="navLink" href="#">Resume</a>
        </li>
        </ul>
    </nav>
  );
}
