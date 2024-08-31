import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './Contacto/contacto.jsx'


const Header = () => {
  return (
    <header>
      <img id="img-head" src='#' alt="Fondo" />
      <button className="btn-volver"><a href='/Contacto'>Volver</a></button>
    </header>
  );
};

<Routes>


<Route path="/Contacto" element={<Contacto />} />
</Routes>

export default Header;