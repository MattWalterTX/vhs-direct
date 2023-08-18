import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Footer from "./Footer";
import About from "./About.js";
import BadURL from "./BadURL.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="about" element={(<About />)} />
        <Route path="/*" element={(<BadURL />)} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
