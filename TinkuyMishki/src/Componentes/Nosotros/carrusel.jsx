import React, { useState } from 'react';
import carrusel1 from './carrusel1.jpg'
import carrusel2 from './carrusel2.jpg'
import carrusel3 from './carrusel3.jpg'
import './Nosotros.css';

const Carrusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: carrusel1,
      title: "Historia",
      content: (
        <>
          <p>Tinkuy Mishki nació del sueño de dos amigos que, tras recorrer las diversas regiones del Perú, se enamoraron de su extraordinaria riqueza culinaria. Durante sus viajes, descubrieron no solo los sabores únicos de cada región, sino también las historias y tradiciones que hacen de la cocina peruana una de las más ricas y variadas del mundo.</p>
          <br />
          <p>Inspirados por estos descubrimientos, en 2020 decidieron abrir las puertas de Tinkuy Mishki en Lima, con el objetivo de crear un espacio donde se celebrara la diversidad de la gastronomía peruana.</p>
          <br />
          <p>Desde el inicio, su visión fue clara: combinar las recetas tradicionales con toques modernos, ofreciendo una experiencia que conectara a los comensales con la esencia del Perú.</p>
          <br />
          <p>El nombre "Tinkuy Mishki," que en quechua significa "Encuentro Sabroso," simboliza nuestro compromiso de reunir a personas de todas partes para compartir y disfrutar de la auténtica cocina peruana. Desde ceviches frescos hasta platos innovadores que fusionan ingredientes de la costa, la sierra y la selva, cada creación en nuestro menú es un tributo a la riqueza cultural y culinaria de nuestro país.</p>
        </>
      ),
    },
    {
      image: carrusel2,
      content: (
        <>
          <h2>Visión</h2>
          <p>Ser reconocidos como un referente de la gastronomía peruana, tanto a nivel nacional como internacional, destacándonos por nuestra capacidad de fusionar la tradición con la innovación.</p>
          <br />
          <p>Queremos que Tinkuy Mishki sea un punto de encuentro donde personas de todas las culturas puedan disfrutar de la riqueza y diversidad de los sabores peruanos, promoviendo el conocimiento y la apreciación de nuestra herencia culinaria.</p>
          <br />
          <h2>Misión</h2>
          <br />
          <p>Ofrecer a nuestros comensales una experiencia gastronómica auténtica que respete y celebre las tradiciones culinarias peruanas, mientras exploramos nuevas formas de innovar y sorprender.</p>
          <br />
          <p>A través de ingredientes frescos y de alta calidad, un servicio cálido y atento, y un ambiente acogedor, buscamos crear un espacio donde cada visita se convierta en un viaje culinario que conecta a las personas con la cultura peruana.</p>
        </>
      ),
    },
    {
      image: carrusel3,
      title: "Nuestro Compromiso",
      content: (
        <>
          <p>En Tinkuy Mishki, estamos profundamente comprometidos con ofrecer una experiencia culinaria que respete las tradiciones peruanas mientras promovemos un ambiente acogedor e inclusivo.</p>
          <br />
          <p>Nos dedicamos a mantener vivas las recetas auténticas de Perú, utilizando ingredientes frescos y técnicas tradicionales para que cada plato refleje la riqueza cultural del país.</p>
          <br />
          <p>Queremos que cada visita a nuestro restaurante sea una celebración de la gastronomía peruana.</p>
          <br />
          <p>Desde la calidez de nuestra hospitalidad hasta el ambiente vibrante, buscamos que nuestros clientes disfruten de una experiencia completa que combine comida exquisita, música envolvente y un servicio atento.</p>
          <br />
          <p>Nuestro objetivo es ser un lugar de encuentro donde personas de todas las culturas puedan disfrutar y compartir la diversidad de sabores peruanos. Cada comida en Tinkuy Mishki está diseñada para crear recuerdos inolvidables y ofrecer una verdadera conexión con la esencia de Perú.</p>
        </>
      ),
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="Informacion">
      <div className="Carruseles" id="slider">
        <div className="slider-section">
          <img src={slides[activeIndex].image} alt={slides[activeIndex].title} />
          <div className="text-overlay">
            <h2>{slides[activeIndex].title}</h2>
            {slides[activeIndex].content}
          </div>
        </div>
      </div>
      <div className="btn-left" onClick={handlePrev}>
        &#10094;
      </div>
      <div className="btn-right" onClick={handleNext}>
        &#10095;
      </div>
    </section>
  );
};
export default Carrusel;