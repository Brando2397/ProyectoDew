import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Componentes/HomePage/homePage.jsx';
import Contacto from './Componentes/Contacto/contacto.jsx';
import Header from './Componentes/header';
import Gallery from './Componentes/Gallery';
import Footer from './Componentes/footer';
import Carrusel from './Componentes/Nosotros/carrusel.jsx'
import SeccionPM from './Componentes/SeccionPM/SeccionPM.jsx';
import './Componentes/style.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <HomePage />
        {/* Define laaaaaas rutas de tu aplicación */}
        <Routes>
        <Route path="/main" element={<HomePage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrusel" element={<Carrusel />} />
          <Route path="/SeccionPM" element={<SeccionPM />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
