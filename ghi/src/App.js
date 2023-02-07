import './App.css';
import About from './About';
import Nav from './Nav';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
