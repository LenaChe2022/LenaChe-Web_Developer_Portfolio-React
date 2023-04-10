import './App.css';
import Header from './components/Header';
import ProjectList from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

import allProjects from '../src/projectList'


function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
        <Header />
    <div className="view-card">
        <ProjectList props={allProjects}/>
    </div>
    <div className="view-card">
        <AboutMe />
    </div>
        <Footer />
      </div>
  );
}

export default App;
