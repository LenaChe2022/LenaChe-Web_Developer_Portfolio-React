import React from 'react';
import Me from "../images/Me.jpg";

function MyDetail(props) {
  return (
    <div className="text-center">
     <section id="about-me">
            <div className="aside">
                <h3>About Me</h3>
             </div>
             <article className="article">
                <p>I started coding in 2022 within UW boot camp. I enjoy the magic of creating web aplication from scratch! There are so many new and interesting things for me to explore. I would like to display my work here. I hope this portfolio will help you to get to know me better. </p>
                <img id="MyPhoto" src={Me} alt="Me"/> 
             </article>
             <h3>Skills:</h3>
                <ul className="parent">
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>JavaScript</li>
                   <li>Web APIs</li>
                   <li>Third-party APIs</li>
                   <li>Server-side APIs</li>
                   <li>Node.js</li>
                   <li>Object-Oriented Programming (OOP)</li>
                   <li>Express.js</li>
                   <li>SQL</li>
                   <li>Model-View-Controller (MVC)</li>
                   <li>Object-Relational Mapping</li>
                   <li>NoSQL (MongoDB)</li>
                   <li>Progressive Web Applications (PWA)</li>
                   <li>React</li>
                   <li>IndexDB</li>
                   <li></li>
                </ul>
        </section>
    </div>
  );
}

export default MyDetail;