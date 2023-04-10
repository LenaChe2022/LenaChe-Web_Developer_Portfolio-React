import './App.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import ProjectDetail from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
        <Header />
    <div className="bucket-app">
        <ProjectDetail />
    </div>
        <Footer />
      </div>
  );
}

export default App;
