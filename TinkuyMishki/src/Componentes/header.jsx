import React from 'react';
import logo from '../img/fondo.jpg';


const Header = () => {
  return (
    <header>
      <img id="img-head" src={logo} alt="Fondo" />
      <button className="btn-volver">Volver</button>
    </header>
  );
};

export default Header;