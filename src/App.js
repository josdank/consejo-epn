import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';  // Nueva página Acerca de Nosotros
import PlanTrabajo from './components/PlanTrabajo';
import Contact from './components/Contact';
import Values from './components/Values';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/plan-de-trabajo" element={<PlanTrabajo />} />
            <Route path="/values" element={<Values />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
}

export default App;
