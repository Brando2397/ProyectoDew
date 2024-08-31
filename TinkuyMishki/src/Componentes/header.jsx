import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img id="img-head" src='#' alt="Fondo" />
      <button className="btn-volver">
      <Link to="/main">Volver</Link> 
      </button>
      <Link to="/Contacto">Contacto</Link>
    </header>
  );
};

export default Header;