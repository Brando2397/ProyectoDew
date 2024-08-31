import React from 'react';


const Footer = () => {
  return (
    <footer className="pie">
      <div className="header">
        <div className="logo"></div>
        <div className="botom_part"></div>
        <img src="img/logo.jpg" className="logo2" alt="Logo" />
        <div className="redes">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="fb"><i className="fa-brands fa-facebook"></i></span>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="in"><i className="fa-brands fa-instagram"></i></span>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <span className="yt"><i className="fa-brands fa-youtube"></i></span>
          </a>
        </div>
      </div>
      <hr />
      <div className="section">
        <h3 className="text-center">Mapa de sitio</h3>
        <a href="#" className="text-center"><p className="p-ft">Inicio</p></a>
        <a href="#" className="text-center"><p className="p-ft">Nosotros</p></a>
        <a href="#" className="text-center"><p className="p-ft">Productos</p></a>
        <a href="#" className="text-center"><p className="p-ft">Contactanos</p></a>
        <br />
        <p className="text-center"><b>Copyright@2024TinkuyMishki</b></p>
        <p className="text-center"><b>All right reserved</b></p>
      </div>
      <hr />
      <div className="video">
        <video width="350" height="250" controls>
          <source src="../Footer/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <h3 className="text-center"><b>Reservas online</b></h3>
        <p className="text-center"><b>Martes a Sábados de 13:30 a 16:00 horas y</b></p>
        <p className="text-center"><b>de 20:30 a 22:00 horas (Cierra a las 00:00 horas)</b></p>
      </div>
    </footer>
  );
};

export default Footer;