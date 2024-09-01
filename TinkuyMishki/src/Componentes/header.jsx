import React from 'react';
import { Link } from 'react-router-dom';
import  './Nosotros/Nosotros.css'

const Header = () => {
  return (
        <>
           <header>
             <div className="Nosotros">
               <h1>Tinkuy Mishki</h1>
               <nav className="enlaces">
                    <ul>                                                                                                                                                                               
                         <li><Link to="/main">Volver</Link></li>
                         <li><Link to="/Carrusel">Nosotros</Link> </li>
                         <li><a href="" target="_blank">Productos</a></li>
                         <li><Link to="/Contacto">Contacto</Link></li>
                     </ul>
               </nav>
             </div>
           </header>
        </>
  );
};

export default Header;