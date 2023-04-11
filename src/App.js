import './App.css';
import { useState } from 'react';
import ProjectList from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Form from './components/Form/index';

import allProjects from '../src/projectList'


function App() {

    const navStyle = {
        color: '#FFA62B',
        fontSize: 'x-large',
        fontWeight: 'bold',
      };
    
      const [aboutmestyle, setAboutmestyle] = useState({});
      const [contactstyle, setContactstyle] = useState({});
      const [portfoliostyle, setPortfoliostyle] = useState({});
      const [resumestyle, setResumestyle] = useState({});

      const [activeSection, setActiveSection] = useState('aboutMe');
    

      const handleAboutmeClick = () => {
        setAboutmestyle(navStyle);
        setContactstyle({});
        setPortfoliostyle({});
        setResumestyle({});
        setActiveSection('aboutMe');
      };
    
      const handlePortfolioClick = () => {
        setPortfoliostyle(navStyle);
        setAboutmestyle({});
        setContactstyle({});
        setResumestyle({});
        setActiveSection('portfolio');
      };
    
      const handleContactClick = () => {
        setContactstyle(navStyle);
        setAboutmestyle({});
        setPortfoliostyle({});
        setResumestyle({});
        setActiveSection('contact');
      };
    
      const handleResumeClick = () => {
        setResumestyle(navStyle);
        setAboutmestyle({});
        setPortfoliostyle({});
        setContactstyle({});
        setActiveSection('resume');
      };
    


    return (
    <div className="flex-column justify-flex-start min-100-vh">    
    <header className="container header">
        <h1 className="m-0">LenaChe</h1>
        <nav className="navigation  justify-space-between-lg justify-center align-center">
        <ul>
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
    {activeSection === 'aboutMe' && <AboutMe />}
    {activeSection === 'contact' && <Form />}
    {activeSection === 'resume' && <Resume />}
    {activeSection === 'portfolio' && <ProjectList props={allProjects}/>}
    </div>
    <Footer />
    </div>
    );

};
 
  


export default App;
