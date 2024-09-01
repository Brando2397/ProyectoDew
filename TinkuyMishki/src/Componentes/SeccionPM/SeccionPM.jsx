import React, { useState } from 'react';

const items = [
    {
      title: 'Arroz chaufa de mariscos S/ 13.00',
      description: 'Mezcla de arroz frito acompañada de verduras, tortilla de huevo y carnes al gusto.',
      imgSrc: 'https://www.comedera.com/wp-content/uploads/2022/02/arroz-chaufa-de-mariscos.jpg',
      altText: 'Arroz chaufa de mariscos',
      price: 13.00,
      type: 'food'
    },
    {
      title: 'Arroz con mariscos S/ 12.00',
      description: 'Deliciosa preparación que combina el sabor y la textura del arroz con una variedad de mariscos y pescados frescos.',
      imgSrc: 'https://meri.pe/wp-content/uploads/2023/02/arroz-con-mariscos.jpeg',
      altText: 'Arroz con mariscos',
      price: 12.00,
      type: 'food'
    },
    {
      title: 'Causa acevichada S/ 12.00',
      description: 'Papa amarilla prensada y sazonada rellena de láminas de palta, cubierto de nuestro tradicional ceviche de pescado en salsa de pulpa de ají rojo.',
      imgSrc: 'https://www.luchoscocinaperuana.es/wp-content/uploads/2020/12/CAUSA-ACEVICHADA.png',
      altText: 'Causa acevichada',
      price: 12.00,
      type: 'food'
    },
    {
      title: 'Ceviche S/ 15.00',
      description: 'Platillo preparado con pescado crudo marinado en jugo de limón y condimentado con otros ingredientes que varían según la región.',
      imgSrc: 'https://assets.unileversolutions.com/recipes-v2/234472.jpg',
      altText: 'Ceviche',
      price: 15.00,
      type: 'food'
    },
    {
      title: 'Chicharrón de calamar S/ 10.00',
      description: 'El chicharrón de calamar es un plato típico de la gastronomía del Perú, originaria de la zona norte.',
      imgSrc: 'https://i.pinimg.com/564x/80/6b/e7/806be75983327d0e55ce94115e7aa27e.jpg',
      altText: 'Chicharrón de calamar',
      price: 10.00,
      type: 'food'
    },
    {
      title: 'Chilcano S/ 8.00',
      description: 'Se caracteriza por su combinación simple pero perfecta de pisco, ginger ale y limón.',
      imgSrc: 'https://i.ytimg.com/vi/nNJGCHV1vbE/maxresdefault.jpg',
      altText: 'Chilcano',
      price: 8.00,
      type: 'food'
    },
    {
      title: 'Choros a la chalaca S/ 16.00',
      description: 'Se distingue por servirse precisamente en la valva de los choros, que hacen las veces de cucharas para poder llevarlos a la boca.',
      imgSrc: 'https://www.comedera.com/wp-content/uploads/2022/06/choros-a-la-chalaca.jpg',
      altText: 'Choros a la chalaca',
      price: 16.00,
      type: 'food'
    },
    {
      title: 'Chupe de mariscos S/ 17.00',
      description: 'Preparación culinaria en forma de sopa que presenta como ingrediente uno o varios tipos de mariscos.',
      imgSrc: 'https://www.paulinacocina.net/wp-content/uploads/2024/03/chupe-de-camaron-Paulina-Cocina-Recetas-Cocina-Recetas-1.jpg',
      altText: 'Chupe de mariscos',
      price: 17.00,
      type: 'food'
    },
    {
      title: 'Conchita a la parmesana S/ 20.00',
      description: 'Es un plato tradicional peruano que se sirve como aperitivo.',
      imgSrc: 'https://www.joseantonio.com.pe/wp-content/uploads/2019/07/conchita-a-la-parmesana-1.jpg',
      altText: 'Conchita a la parmesana',
      price: 20.00,
      type: 'food'
    },
    {
      title: 'Jalea de pescado S/ 18.00',
      description: 'Es un plato de pescado y mariscos fritos que se sirve con yuca frita y chifles.',
      imgSrc: 'https://www.comedera.com/wp-content/uploads/2022/06/jalea-mixta.jpg',
      altText: 'Jalea de pescado',
      price: 18.00,
      type: 'food'
    },
    {
      title: 'Parihuela S/ 20.00',
      description: 'Sopa de pescado y marisco típica de la costa peruana.',
      imgSrc: 'https://www.comedera.com/wp-content/uploads/2022/01/parihuela.jpg',
      altText: 'Parihuela',
      price: 20.00,
      type: 'food'
    },
    {
      title: 'Pescado al ajillo S/ 17.00',
      description: 'El pescado al ajillo se hace combinando ajo, mantequilla o aceite de oliva con perejil o cilantro finamente troceado.',
      imgSrc: 'https://aybmasters.com.do/recetas/wp-content/uploads/2016/05/pescado-al-ajillo-1.jpg',
      altText: 'Pescado al ajillo',
      price: 17.00,
      type: 'food'
    },
    {
      title: 'Pescado frito S/ 17.00',
      description: 'Pescado que se cocina sumergiéndolo en aceite o grasa caliente.',
      imgSrc: 'https://i.ytimg.com/vi/HyBl-Du7OBc/maxresdefault.jpg',
      altText: 'Pescado frito',
      price: 17.00,
      type: 'food'
    },
    {
      title: 'Sudado de pescado S/ 16.00',
      description: 'Consiste en cocer, en este caso el pescado, con poco líquido y dejar que suelte sus propios jugos.',
      imgSrc: 'https://origin.cronosmedia.glr.pe/large/2021/03/18/lg_605360564332ac2dfc54e0cb.jpg',
      altText: 'Sudado de pescado',
      price: 16.00,
      type: 'food'
    },
    {
      title: 'Tiradito S/ 20.00',
      description: 'Plato marino a base de pequeñas láminas de pescado cuya preparación es muy similar a la del Cebiche, por su "cocción" en jugo de limón, aunque no lleva cebolla.',
      imgSrc: 'https://www.pescanova.pe/wp-content/uploads/2021/08/Tiradito-de-pejerrey.jpg',
      altText: 'Tiradito',
      price: 20.00,
      type: 'food'
    },

    {
      title: 'Cerveza',
      imgSrc: 'https://www.guiadelacerveza.com/wp-content/uploads/2023/10/Cervezas-mas-vendidas-en-Peru.jpg',
      altText: 'Cerveza',
      price: 7.00,
      type: 'beverage'
    },
    {
      title: 'Chicha morada',
      imgSrc: 'https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg',
      altText: 'Chicha morada',
      price: 10.00,
      type: 'beverage'
    },
    {
      title: 'Limonada',
      imgSrc: 'https://7diasdesabor.com/wp-content/uploads/2022/08/AdobeStock_190152413-scaled.jpeg',
      altText: 'Limonada',
      price: 12.00,
      type: 'beverage'
    },
    {
      title: 'Agua mineral',
      imgSrc: 'https://i.ytimg.com/vi/YjAf4pW0N60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCT1KXe5UzgQ2luLIzeECRURnc-YQ',
      altText: 'Agua mineral',
      price: 3.00,
      type: 'beverage'
    },
    {
      title: 'Vino',
      imgSrc: 'https://imagenes.elpais.com/resizer/v2/HCLXJMCQPFGJBGOX56Z6DABR5I.jpg?auth=3450488eedd4dd2e7186f0c6ebbcd9a9e2f00204a9b92b8590bfbf1f4b1d7420&width=1960&height=1470&focal=989%2C906',
      altText: 'Vino',
      price: 25.00,
      type: 'beverage'
    },
    {
      title: 'Gaseosa',
      imgSrc: 'https://www.filmsperu.pe/wp-content/uploads/2023/10/Marcas-de-gaseosas-mas-vendidas-del-peru.webp',
      altText: 'Gaseosa',
      price: 15.00,
      type: 'beverage'
    }
    
  ];

  const SeccionPm = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
  
    // Calcula el precio total
    const calculateTotal = (items) => {
      return Object.values(items).reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    // Maneja la selección de ítems
    const handleSelect = (item) => {
      setSelectedItems(prev => {
        const updatedItems = { ...prev };
        if (updatedItems[item.title]) {
          updatedItems[item.title].quantity += 0.5;
        } else {
          updatedItems[item.title] = { ...item, quantity: 1 };
        }
        const newTotalPrice = calculateTotal(updatedItems);
        setTotalPrice(newTotalPrice);
        return updatedItems;
      });
    };
  
    // Maneja la cancelación de ítems
    const handleCancel = (item) => {
      setSelectedItems(prev => {
        const updatedItems = { ...prev };
        if (updatedItems[item.title]) {
          if (updatedItems[item.title].quantity > 1) {
            updatedItems[item.title].quantity -= 0.5;
          } else {
            delete updatedItems[item.title];
          }
          const newTotalPrice = calculateTotal(updatedItems);
          setTotalPrice(newTotalPrice);
        }
        return updatedItems;
      });
    };
  
    return (
      <div className="gallery-container">
        <div className="selected-items">
          <h2>Lista de Compras</h2>
          <h3>Platos</h3>
          <ul>
            {Object.values(selectedItems).filter(item => item.type === 'food').map((item, index) => (
              <li key={index}>
                {item.title} - S/ {item.price.toFixed(2)} x {item.quantity}
                <button className='btnEliminar' onClick={() => handleCancel(item)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Bebidas</h3>
          <ul>
            {Object.values(selectedItems).filter(item => item.type === 'beverage').map((item, index) => (
              <li key={index}>
                {item.title} - S/ {item.price.toFixed(2)} x {item.quantity}
                <button onClick={() => handleCancel(item)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: S/ {totalPrice.toFixed(2)}</h3>
        </div>
        <div className="gallery">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imgSrc} alt={item.altText} />
              <div className="overlay">
                <span>{item.title}</span><br /><br />
                {item.description}
              </div>
              <button
                className="select-button"
                onClick={() => handleSelect(item)}
              >
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SeccionPm;