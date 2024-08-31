import React, { useState } from 'react';


const items = [
  {
    title: 'Anticucho S/20.00',
    description: 'Plato a base de corazón de ternera cocinado en trozos al carbón',
    imgSrc: 'https://www.peru.travel/Contenido/General/Imagen/es/62/1.1/Anticucho.jpg',
    altText: 'Anticucho de Corazón de Res',
    price: 20.00,
    type: 'food'
  },
  {
    title: 'Anticucho mixto S/ 25.00',
    description: 'Compuesto por 2 trozos de Longaniza artesanal, 2 cubos de 3x3cm c/u de carne de res, pechuga de pollo y pulpa de pierna de cerdo, 2 trozo de pimenton verde y rojo y 2 trozos de cebolla.',
    imgSrc: 'https://cuzcoeats.com/wp-content/uploads/2013/12/cuscoeats_7-e1385915893565.jpg',
    altText: 'Anticucho Mixto',
    price: 25.00,
    type: 'food'
  },
  {
    title: 'Bife angosto a la parilla S/ 28.00',
    description: '200g. de bife angosto acompañado de papas fritas, ensalada de estación y cremas.',
    imgSrc: 'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-bifes-provenzal-parrilla-bifes-provenzal-bifes-parrilla-bifes-receta-bifes-3.jpg',
    altText: 'Bife Angosto a la Parrilla',
    price: 28.00,
    type: 'food'
  },
  {
    title: 'Brochetas de pollo S/18.00',
    description: 'Consisten en trozos de pollo ensartados en palitos de brocheta y cocinados a la parrilla, al horno o a la plancha.',
    imgSrc: 'https://www.coren.es/wp-content/uploads/2018/07/Brochetas-de-pollo-y-verduras.jpeg',
    altText: 'Borchetas de Pollo',
    price: 18.00,
    type: 'food'
  },
  {
    title: 'Champiñones a la parrilla S/ 15.00',
    description: 'Deliciosos champiñones a la parrilla con crocantes papas fritas y ensalada fresca.',
    imgSrc: 'https://imgmedia.buenazo.pe/650x358/buenazo/original/2021/07/02/60dfbf473b0ec002c502f063.jpg',
    altText: 'Champiñones a la Parrilla',
    price: 15.00,
    type: 'food'
  },
  {
    title: 'Chancho a la caja china S/ 30.00',
    description: 'Un sabroso y blandísimo trozo de cerdo, asado lentamente durante más de siete horas, con una corteza crujiente y crocante.',
    imgSrc: 'https://perudelights.com/wp-content/uploads/2018/04/1400000015479.jpg',
    altText: 'Chancho a la Caja China',
    price: 30.00,
    type: 'food'
  },
  {
    title: 'Chuleta a la parrilla S/ 18.00',
    description: 'Chuleta de cerdo a la parrilla de 300grs con papas fritas y ensalada.',
    imgSrc: 'https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/18089_1.jpg',
    altText: 'Chuleta a la Parrilla',
    price: 18.00,
    type: 'food'
  },
  {
    title: 'Churrasco a la parrilla S/ 20.00',
    description: 'Churrasco 250grs con papas fritas y ensalada.',
    imgSrc: 'https://media-cdn.tripadvisor.com/media/photo-s/16/46/ac/87/1500.jpg',
    altText: 'Churrasco a la Parrilla',
    price: 20.00,
    type: 'food'
  },
  {
    title: 'Mollejitas al carbón S/17.00',
    description: 'Mollejas al carbon con papas fritas y ensalada.',
    imgSrc: 'https://live.staticflickr.com/4174/33416708553_31c44ef2d0_b.jpg',
    altText: 'Mollejitas a la Parrilla',
    price: 17.00,
    type: 'food'
  },
  {
    title: 'Mostro S/ 22.00',
    description: 'Consiste en la combinación del pollo a la brasa y arroz chaufa.',
    imgSrc: 'https://cluv360.com/public/uploads/products/meta/ThIqjMmWpe5sEZWhpaDeR7ODKF0rLVoNQrAlQjj7.jpeg',
    altText: 'Mostro',
    price: 22.00,
    type: 'food'
  },
  {
    title: 'Pechuga a la parrilla S/ 20.00',
    description: 'Pechuga de pollo 150grs con papas fritas y ensalada',
    imgSrc: 'https://assets.unileversolutions.com/v1/799195.jpg',
    altText: 'Pechuga a la Parrilla',
    price: 20.00,
    type: 'food'
  },
  {
    title: 'Pollo a la brasa S/ 18.00',
    description: 'Consiste en carne de pollo eviscerada, y cocida a las brasas.',
    imgSrc: 'https://p-tv.pe/wp-content/uploads/2023/09/pollo-a-la-brasa-with-salad-and-dipping-sauces.jpg',
    altText: 'Pollo a la Brasa',
    price: 18.00,
    type: 'food'
  },
  {
    title: 'Pollo broaster S/ 15.00',
    description: 'Pollo empanizado con almidón de papa, servido con ensalada, salsa de rocoto y papas fritas.',
    imgSrc: 'https://www.paulinacocina.net/wp-content/uploads/2024/01/pollo-a-la-broaster-Paulina-Cocina-Recetas.jpg',
    altText: 'Pollo Broaster',
    price: 15.00,
    type: 'food'
  },
  {
    title: 'Salchipapa S/ 12.00',
    description: 'Plato de papas y salchichas fritas, que se puede acompañar con mayonesa, salsa de tomate u otro tipo de salsas',
    imgSrc: 'https://www.paulinacocina.net/wp-content/uploads/2023/11/receta-de-slachipapas-paulina-cocina-recetas.jpg',
    altText: 'Salchipapa',
    price: 12.00,
    type: 'food'
  },
  {
    title: 'Salchipollo S/ 15.00',
    description: 'Plato de papas, salchichas fritas y 1/4 de pollo, que se puede acompañar con mayonesa, salsa de tomate u otro tipo de salsas',
    imgSrc: 'https://st.depositphotos.com/52031066/60610/i/450/depositphotos_606101766-stock-photo-peruvian-dish-called-salchipollo-grilled.jpg',
    altText: 'Salchipollo',
    price: 15.00,
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

const Gallery = () => {
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
        updatedItems[item.title].quantity += 1;
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
          updatedItems[item.title].quantity -= 1;
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
              <button onClick={() => handleCancel(item)}>Eliminar</button>
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

export default Gallery;