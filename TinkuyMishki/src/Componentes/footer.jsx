import React from 'react';
import logo from './Logo.png'
import Mapa from './Mapa'
import '../Componentes/Nosotros/Nosotros.css'

const Footer = () => {
  return (
    <footer className="pie">
      <div className="piedepagina">
        <img src= {logo} alt="Logo" className="logo2" />
            <div className="redes">
                 <a href="https://www.facebook.com/" target="_blank" ><span className="fb"><i className="fa-brands fa-facebook"></i></span></a>
                 <a href="https://www.instagram.com/" target="_blank" ><span class="in"><i class="fa-brands fa-instagram"></i></span></a>
                 <a href="https://www.youtube.com/" target="_blank" ><span class="yt"><i class="fa-brands fa-youtube"></i></span></a>
            </div>
      </div>
      <div className="MapadeSitio">
             {/* Mapa de sitio */}
             <center><h3>Mapa de sitio</h3></center>
             <br />
            
       <div className="map">
           <Mapa />
       </div>
          <br />
          <b><center>Copyright@2024Tinkuy Mishki</center></b>
          <br />
          <b><center>All right reserved</center></b>
      </div>
      <div className="video">
        {/* Video de YouTube */}
        <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/aJRQdi4KPxM?si=FLRFXVb381WKS7dE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {/* Información de reservas */}
        <b><center><h3>Reservas online</h3></center></b>
        <b><center>Martes a Sábados de 13:30 a 16:00 horas y</center></b>
        <b><center>de 20:30 a 22:00horas (Cierra a las 00:00 horas)</center></b>
      </div>
      
    </footer>
     )
  }
  export default Footer;