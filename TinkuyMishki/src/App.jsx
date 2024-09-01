import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Componentes/HomePage/homePage.jsx';
import Contacto from './Componentes/Contacto/contacto.jsx';
import Header from './Componentes/header';
import Gallery from './Componentes/Gallery';
import Footer from './Componentes/footer';
import Carrusel from './Componentes/Nosotros/carrusel.jsx'
import SeccionPM from './Componentes/SeccionPM/SeccionPM.jsx';
import Criollo from './Componentes/SeccionCrio.jsx'
import './Componentes/style.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        {/* Define laaaaaas rutas de tu aplicación */}
        <Routes>
        <Route path="/main" element={<HomePage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/SeccionPM" element={<SeccionPM />} />
          <Route path="/Carrusel" element={<Carrusel />} />
          <Route path="/Criollo" element={<Criollo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
