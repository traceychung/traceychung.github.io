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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
