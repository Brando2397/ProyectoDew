import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './Componentes/Contacto/contacto.jsx';
import Header from './Componentes/header';
import Gallery from './Componentes/Gallery';
import Footer from './Componentes/footer';
import './Componentes/style.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        {/* Define laaaaaas rutas de tu aplicación */}
        <Routes>
          <Route path="/main" element={<Gallery />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
