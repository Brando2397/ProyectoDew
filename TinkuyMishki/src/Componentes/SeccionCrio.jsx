import React, { useState } from 'react';

const items = [
    {
      title: 'Carapulcra S/12.00',
      description: 'Potaje indígena, preparado con papa seca sancochada y guisada con diversas carnes como pollo, gallina y chancho.',
      imgSrc: 'https://www.icaperu.net/wp-content/uploads/2016/06/carapulcra.jpg',
      altText: 'Carapulcra',
      price: 12.00,
      type: 'food'
    },
    {
      title: 'Ceviche de pollo S/ 14.00',
      description: 'Es una adaptación del famoso ceviche de pato norteño.',
      imgSrc: 'https://labasilica640.pe/wp-content/uploads/2021/07/ceviche-de-pollo.jpg',
      altText: 'Ceviche de pollo',
      price: 14.00,
      type: 'food'
    },
    {
      title: 'Arroz tapado S/ 10.00',
      description: 'En su preparación norteña, se elaboraba el relleno con mariscos.',
      imgSrc: 'https://www.ajinomoto.com.pe:8085/img/receta/30.-ARROZ-TAPADO1.jpg',
      altText: 'Arroz tapado',
      price: 10.00,
      type: 'food'
    },
    {
      title: 'Escabeche de pollo S/ 15.00',
      description: 'Su denominación proviene del árabe “sikbag”, plato persa mencionado en el libro “Las mil y una noches”.',
      imgSrc: 'https://i.ytimg.com/vi/nclJw77czjw/maxresdefault.jpg',
      altText: 'Escabeche de pollo',
      price: 15.00,
      type: 'food'
    },
    {
      title: 'Ají de gallina S/ 13.00',
      description: 'Consiste en un ají o crema espesa con pechuga de gallina deshilachada.',
      imgSrc: 'https://perubicentenario.com/wp-content/uploads/2021/06/35.png',
      altText: 'Ají de gallina',
      price: 13.00,
      type: 'food'
    },
    {
      title: 'Papa rellena S/ 8.00',
      description: 'Consiste en una masa frita de papa cocida, la cual será rellenada con una mezcla sazonada de carne de vacuno, aceitunas,cebollas y huevo duro.',
      imgSrc: 'https://www.prensatotal.com/wp-content/uploads/2022/08/papa-rellena.jpg',
      altText: 'Papa rellena',
      price: 8.00,
      type: 'food'
    },
    {
      title: 'Locro S/ 11.00',
      description: 'Es una especie de guiso de origen prehispánico y preincaico, típico de varios pueblos andinos, a base de zapallo, maíz ─especialmente blanco─ , poroto blanco y papas.',
      imgSrc: 'https://www.clarin.com/2023/04/28/V62uLqcRD_1256x620__1.jpg',
      altText: 'Locro',
      price: 11.00,
      type: 'food'
    },
    {
      title: 'Lomo saltado S/ 18.00',
      description: 'Es un plato de fusión muy popular que mezcla las tradiciones chinas del salteado con ingredientes peruanos que incluyen ají amarillo, cilantro y tomate.',
      imgSrc: 'https://www.ilcb.edu.pe/repositorioaps/data/1/2/2/not/el-lomo-saltado/images/LOMO-SALTADO.jpg',
      altText: 'Lomo saltado',
      price: 18.00,
      type: 'food'
    },
    {
      title: 'Papa a la huancaina S/ 13.00',
      description: 'Es un entrante típico de la gastronomía peruana que se ha difundido a diferentes regiones de Perú.',
      imgSrc: 'https://www.peru.travel/Contenido/General/Imagen/es/64/1.1/papa-huancaina.jpg',
      altText: 'Papa a la hauncaina',
      price: 13.00,
      type: 'food'
    },
    {
      title: 'Estofado de pollo S/ 14.00',
      description: 'Es un clásico en la gastronomía peruana por su fácil preparación.',
      imgSrc: 'https://www.ajinomoto.com.pe:8085/img/receta/128.-Estofado-de-pollo.jpg',
      altText: 'Estofado de pollo',
      price: 14.00,
      type: 'food'
    },
    {
      title: 'Seco de res S/ 17.00',
      description: 'El seco es un guiso típico de la gastronomía de Perú..',
      imgSrc: 'https://www.recetasthermomix.pe/wp-content/uploads/Imagen-1.png',
      altText: 'Seco de res',
      price: 17.00,
      type: 'food'
    },
    {
      title: 'Chanfainita S/ 14.00',
      description: 'Salsa espesa que acompaña generalmente a las asaduras de cerdo, cordero o conejo..',
      imgSrc: 'https://i.ytimg.com/vi/AFuoikJ3P1Y/maxresdefault.jpg',
      altText: 'Chanfainita',
      price: 14.00,
      type: 'food'
    },
    {
      title: 'Pollo a la olla S/ 13.00',
      description: 'Esta preparación consiste en un guiso de pollo sazonado con diversas especias y condimentos que le brindan un sabor único.',
      imgSrc: 'https://recetascocinaperuana.com/wp-content/uploads/2022/04/pollo-a-la-olla-peruano-1.jpg',
      altText: 'Pollo a la olla',
      price: 13.00,
      type: 'food'
    },
    {
      title: 'Olluquito con carne S/ 16.00',
      description: 'El olluquito con charqui es un plato típico de la gastronomía peruana preparado a base de ollucos y el charqui de llama.',
      imgSrc: 'https://e.rpp-noticias.io/xlarge/2020/05/25/523352_946703.jpg',
      altText: 'Olluquito con carne',
      price: 16.00,
      type: 'food'
    },
    {
      title: 'Arroz con pollo S/ 20.00',
      description: 'Consiste en arroz cocido con pollo y una variedad de verduras y condimentos.',
      imgSrc: 'https://elcomercio.pe/resizer/pNYuIqb1TY0-JaaAu1rps8_ZXyc=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/sandbox.elcomercio/H226OQ3Q6ZDMZH5TBABSPLMOO4.jpg',
      altText: 'Arroz con pollo',
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

  const Criollo = () => {
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
                <button  className='btnEliminar' onClick={() => handleCancel(item)}>Eliminar</button>
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
  
  export default Criollo;