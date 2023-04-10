import './App.css';
import { useState } from 'react';
//import Header from './components/Header';
import ProjectList from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Form from './components/Form/index';

import allProjects from '../src/projectList'

//let currentState = 0;

function App() {

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
      //let currentWindow = 'home';
      const [activeSection, setActiveSection] = useState('home');
    
      const handleHomeClick = () => {
        setHomestyle(navStyle);
        setAboutmestyle({});
        setContactstyle({});
        setPortfoliostyle({});
        setResumestyle({});
        setActiveSection('home');
      };
    
      const handleAboutmeClick = () => {
        setAboutmestyle(navStyle);
        setHomestyle({});
        setContactstyle({});
        setPortfoliostyle({});
        setResumestyle({});
        setActiveSection('aboutMe');
      };
    
      const handlePortfolioClick = () => {
        setPortfoliostyle(navStyle);
        setAboutmestyle({});
        setHomestyle({});
        setContactstyle({});
        setResumestyle({});
        setActiveSection('portfolio');
      };
    
      const handleContactClick = () => {
        setContactstyle(navStyle);
        setHomestyle({});
        setAboutmestyle({});
        setPortfoliostyle({});
        setResumestyle({});
        setActiveSection('contact');
      };
    
      const handleResumeClick = () => {
        setResumestyle(navStyle);
        setHomestyle({});
        setAboutmestyle({});
        setPortfoliostyle({});
        setContactstyle({});
        setActiveSection('resume');
      };
    

    //const [activeSection, setActiveSection] = useState('home');

    // const handleMenuClick = (section) => {
    //   setActiveSection(section);
    // };



    return (
    <div className="flex-column justify-flex-start min-100-vh">    
    <header className="container header">
        <h1 className="m-0">LenaChe</h1>
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
    </header>
    <div className="view-card">
    {activeSection === 'home' && <AboutMe />}
    {activeSection === 'aboutMe' && <AboutMe />}
    {activeSection === 'contact' && <Form />}
    {activeSection === 'portfolio' && <ProjectList props={allProjects}/>}
    </div>
    <Footer />
    </div>
    );


 
  
//     return (
//     <div className="flex-column justify-flex-start min-100-vh">
//         <Header />
//     <div className="view-card">
//         <Form/>
//     </div>    
//     <div className="view-card">
//         <ProjectList props={allProjects}/>
//     </div>
//     <div className="view-card">
//         <AboutMe />
//     </div>
//         <Footer />
//       </div>
//   );
}

export default App;
