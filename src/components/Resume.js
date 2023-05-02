import React from 'react';

//import Easy_recipes from "/Users/lenochka/bootcamp/Challenges/LenaChe-Web_Developer_Portfolio-React/src/pdfs/Easy_recipes.pdf";

function Resume() {
  return (
    <div className="text-center">
     <section id="about-me">
            <div className="aside">
            <br></br>
            <br></br>
            <h3>Link to Resume: <a href={`${process.env.PUBLIC_URL}/pdfs/Easy_recipe.pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a></h3>
             </div>
             <button className='card-btn'>
             <a href={`${process.env.PUBLIC_URL}/pdfs/Easy_recipe.pdf`} target="_blank" rel="noopener noreferrer">Download PDF</a>
             </button>
             <br></br>
             <br></br>
             <h3>List of developer's proficiencies:</h3>
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

export default Resume;