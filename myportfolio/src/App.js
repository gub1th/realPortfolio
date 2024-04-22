import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}> {/* Wrap the main components in Layout */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
