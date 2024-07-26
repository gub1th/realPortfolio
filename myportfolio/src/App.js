import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Routes>
          <Route path="/realPortfolio" element={<Layout />}> {/* Wrap the main components in Layout */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experiences" element={<Experiences />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
