import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import About from "./About.js";
import BadURL from "./BadURL.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="about" element={(<About />)} />
        <Route path="/*" element={(<BadURL />)} />
      </Routes>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
