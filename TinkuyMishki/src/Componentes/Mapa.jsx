import React from 'react';

const Mapa = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8776930491704!2d-77.03045050000001!3d-12.120520000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81a1daea66f%3A0xa44d75482fa1d74d!2sRestaurante%20Misky!5e0!3m2!1ses!2spe!4v1724564677994!5m2!1ses!2spe"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Restaurante Misky"
      ></iframe>
    </div>
  );
};

export default Mapa;