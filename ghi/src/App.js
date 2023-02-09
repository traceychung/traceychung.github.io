import './App.css';
import About from './About';
import Navi from './Nav';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Navi />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
