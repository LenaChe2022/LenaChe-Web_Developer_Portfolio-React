import './App.css';
import Header from './components/Header';
import ProjectDetail from './components/Project';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
        <Header />
    <div className="bucket-app">
        <ProjectDetail />
    </div>
    <div className="bucket-app">
        <AboutMe />
    </div>
        <Footer />
      </div>
  );
}

export default App;
