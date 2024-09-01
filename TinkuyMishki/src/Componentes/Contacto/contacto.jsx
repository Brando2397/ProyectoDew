import React from "react";
import { useState } from "react";
import './contacto.css'

//PRIMERA PARTE DEL LA SECCION//

function LlenarFormulario() {    

    let [style, setStyle] = useState({

        style1 : {display:'block'},
        style2 : {display:'none'},
        style3 : {display:'none'},

    });

    let [color,setColor] = useState({

        boton1: {backgroundColor:'green'},
        boton2: {backgroundColor:'gray'},
        boton3: {backgroundColor:'gray'}
    })

    const modificatDisplay = (name) => {
        
        if (name === "btn1") {

            setStyle( prevStyle => ({
                ...prevStyle,
                style1: {display:'block',opacity:'0'},
                style2 :{display:'none'},
                style3 : {display:'none'},
            }))

            setColor({

                ...color,

                boton1: {backgroundColor:'white'},
                boton2: {backgroundColor:'gray'},
                boton3: {backgroundColor:'gray'}

            })

            setTimeout(() => setStyle( prevStyle => ({
                ...prevStyle,
                style1:{
                    ...prevStyle.style1,
                    opacity:'1', transition: 'opacity 0.5s ease-in'}
            })),300)

       
        } else if (name === "btn2") {

            setStyle( prevStyle => ({
                
                ...prevStyle,
                style1:  {display:'none'},
                style2 : {display:'block', opacity:'0'},
                style3 : {display:'none',opacity: '0'},

            }))

            setColor({

                ...color,

                boton2: {backgroundColor:'white'},
                boton1: {backgroundColor:'gray'},
                boton3: {backgroundColor:'gray'}

            })

            setTimeout(() => setStyle( prevStyle => ({
                ...prevStyle,
                style2:{
                    ...prevStyle.style2,
                    opacity:'1', transition:'opacity 0.5s ease-in'}
                })),300)
        
        } else if (name === "btn3") {

            setStyle( prevStyle => ({
                
                ...prevStyle,
                style1:  {display:'none'},
                style2 : {display:'none'},
                style3 : {display:'block', opacity: '0'},

            }))

            setColor({

                ...color,

                boton3: {backgroundColor:'white'},
                boton1: {backgroundColor:'gray'},
                boton2: {backgroundColor:'gray'}

            })

            setTimeout(() => setStyle( prevStyle => ({
                ...prevStyle,
                style3:{
                    ...prevStyle.style3,
                    opacity:'1', transition: 'left 0.3s ease-in, opacity 0.5s ease-in'}
                })),300)
        }  

    }
    
    return (

        <>
            <div className="LlenarForm">
                <div className="cajaTexto">
                    <div id="text1" className="text"
                    style={style.style1}>
                        <h2>¿Por qué llenar este formulario?</h2>
                        <p>Llenar este formulario es el primer paso para acceder a nuestros servicios personalizados. Aquí hay algunas razones por las que te animamos a completarlo:</p>
                        <p>Recibe descuentos y ofertas especiales solo para miembros.</p>
                        <p> Ayúdanos a entender mejor tus necesidades para ofrecerte un servicio adaptado a ti.</p>
                        <p>Al proporcionar tu información, podemos contactarte de manera más eficiente para cualquier consulta o asistencia.</p>
                    </div>
                    <div id="text2" className="text"
                    style={style.style2}>
                        <h2>Confidencialidad y seguridad</h2>
                        <p>Nos tomamos muy en serio la privacidad de tus datos. Toda la información que compartas con nosotros será tratada con la máxima confidencialidad y seguridad. Nunca compartiremos tus datos personales con terceros sin tu consentimiento explícito.</p>
                    </div>
                    <div id="text3"  className="text"
                    style={style.style3}>
                        <h2>¿Necesitas ayuda?</h2>
                        <p>Si tienes alguna pregunta o necesitas asistencia para llenar el formulario, no dudes en contactarnos. Nuestro equipo de soporte está disponible para ayudarte en cualquier momento.</p>
                        <p>¡Gracias por confiar en nosotros!</p>
                    </div>
                </div>
                <div className="contenedorBotones">
                    <button style={color.boton1} onClick={() => modificatDisplay("btn1")}></button>
                    <button style={color.boton2} onClick={() => modificatDisplay("btn2")}></button>
                    <button style={color.boton3} onClick= {() => modificatDisplay("btn3")}></button>
                </div>
            </div>

        </>
    )
}


function Formulario({pasarFuncion, pasarDatos}) {

    const [datos, setDatos] = useState({

        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        dirrecion: '',
        mensaje: ''
    }
    )

    const pasarData = (datos) => {pasarDatos(datos)}

    const cambiarDatos = (e) => 
        {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value

        });

        pasarData(datos)

    }

    const  reempSubmit = (e) => {
        
        e.preventDefault(),
        pasarFuncion(),
        cambiarDatos(e)

    }


    return (
        <>

            <form className="Formulario" onSubmit={reempSubmit}>

                <h2>Ingresa tus datos</h2>
                <div className="nombre_apellido" >
                    <div className="contenedor_duo">
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={datos.nombre}
                            onChange={cambiarDatos}
                            className="input input1"
                        />
                    </div>
            
                <div className="contenedor_duo">
                    <label htmlFor="apellido" className="label">Apellido:</label>
                    <input 
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={datos.apellido}
                        onChange={cambiarDatos}
                        className="input input1"

                        
                    />
                </div>

                </div>

                <div className="contenedor_solo"> 
                    
                    <label htmlFor="dirrecion" className="label">Dirrecion:</label>
                    
                    <input
                        type="text"
                        id="dirrecion"
                        name="dirrecion"
                        value={datos.dirrecion}
                        onChange={cambiarDatos}
                        className="input"
                    />
                </div>


                <div className="nombre_apellido" >
                    <div className="contenedor_duo">
                        <label htmlFor="celular" className="label">Celular:</label>
                        <input
                            type="text"
                            id="celular"
                            name="celular"
                            value={datos.celular}
                            onChange={cambiarDatos}
                            className="input input1"
                        />
                    </div>

                    <div className="contenedor_duo">
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={datos.email}
                            onChange={cambiarDatos}
                            className="input input1"
                        />
                    </div>

                </div>

                <div className="contenedor_solo">
                        <label htmlFor="mensaje" className="label">Mensaje:</label>
                        <input
                            type="text"
                            id="mensaje"
                            name="mensaje"
                            value={datos.mensaje}
                            onChange={cambiarDatos}
                            className="input input2"
                        />
                    </div>
                <button className="boton_form" type='submit'>ENVIAR</button>
            </form>
            

        </>
    )


}


//SEGUNDA PARTE DEL LA SECCION//


function SaludoAlCliente({datos,datos2,datos3}){

    return (
    
    <>
    <div className="contenedorSaludo">
        <h2>Bienvenido,{datos.nombre} {datos.apellido}</h2>
        <p>Por favor, elige la fecha cuando deseas hacer la reserva</p>
        <h3>Datos de la Reserva:</h3>
        <p>Fecha de la reserva: {datos2}</p>
        <p>Hora de la reserva: {datos3}</p>
        <button className="fecha">Aceptar</button>
    </div>
    
    </>
    )


}

function SeleccionarReserva({pasarDatos2,pasarDatos3}){


    const pasarDatos21 = (datos) => {pasarDatos2(datos)}
    const pasarDatos31 = (datos) => {pasarDatos3(datos)}

    const fecha = new Date();

    const diaFecha = fecha.getDate();

    const formtFecha = { month: 'long'};
    
    const mesFecha = fecha.toLocaleDateString('Es-es',formtFecha);

    const listFecha = [];

    const listarFecha = () => {

        for (let i = diaFecha; i < 7; i++) {

            listFecha.push( mesFecha + " " + i )
    
        }


    };

    listarFecha()

    const[estiloContenedorFecha,setEstiloContenderFecha] = useState({});

    const aparecerHora = (e) => {

        const datos = e.target.value;

        pasarDatos21(datos)


        setEstiloContenderFecha(prevStyle => ({

            ...prevStyle,
            display: 'grid',
            opacity: '1'
        }))
    }

    const aparecerFecha = (e) => {

        const datos = e.target.value;

        pasarDatos31(datos)
    }
    const listHora = ['6:30 p.m', '7:00 p.m','7:30 p.m','8:30 p.m', '8:45 p.m', '9:30 p.m'] 

    const diagramarListFecha = listFecha.map((elemento,index) => (

        <button className="fecha" key={index} value= {elemento} onClick={(e) => {aparecerHora(e)}} >{elemento}</button>

    ))

    const diagramarListHora = listHora.map((elemento,index) => (

        <button className="fecha" value= {elemento} key={index}  onClick={(e) => {aparecerFecha(e)}} >{elemento}</button>

    ))




    return (
    
    <>
    <div className="contenedorSeleccionReserva">
        <h2>Confirme la fecha disponible</h2>
        <div className="contenedorSeleccionFechaReserva">
        {diagramarListFecha}
        </div>
        <div className="contenedorFecha" style={estiloContenedorFecha}>
            <h2>Confirme la Hora disponible</h2>
            <div className="contenedorSeleccionHoraReserva">
            {diagramarListHora}
        </div>
        </div>
        
    </div>
    
    </>
    )


}



function Contacto() {

    const [styleCont, setStyleCont] = useState({
        
        
    seccion1 : {right : '0px'},
    seccion2 : {right : '100vw'},
    
    })

    const [datosForm, setDatosForm] = useState({})

    const [datosSaludo, setDatosSaludo] = useState()

    const [datosHora, setDatosHora] = useState()

    const recopilarDatos = (datos) => {

        setDatosForm(datos)
    }

    const recopilarDatos2 = (datos2) => {

        setDatosSaludo(datos2)
    }

    const recopilarDatos3 = (datos3) => {

        setDatosHora(datos3)
    }

    const deslizar = () => {

        console.log("tamos aqui");

        setStyleCont(

            {...styleCont, 
            
            seccion1 : {right : '100vw', transition: 'right 1s'},

            }
        )

        setTimeout( 
            
            () => {
            
                setStyleCont(prevStyle => ({

                    ...prevStyle, 
            
                        seccion1 : {display:'none'},
                        seccion2: {display:'flex'}
                        })
                    )

                }
                      
        ,500)

        setTimeout( 
            
            () => {
            
                setStyleCont(
                    
                    prevStyle => ({

                        ...prevStyle, 
            
                        seccion2 : {
                            ...prevStyle.seccion2,
                            left : '0px', transition: 'left 1s'}

                    })
                
                )

            }
        ,550)


    }

    return (

        <>  
            <div className="reservaContenedor reservaContenedor1" style={styleCont.seccion1}>
                <LlenarFormulario></LlenarFormulario>
                <Formulario pasarFuncion={deslizar} pasarDatos = {recopilarDatos}></Formulario>
            </div>

            <div className="reservaContenedor reservaContenedor2" style={styleCont.seccion2}>
                <SaludoAlCliente datos={datosForm} datos2={datosSaludo} datos3={datosHora}></SaludoAlCliente>
                <SeleccionarReserva pasarDatos2 = {recopilarDatos2} pasarDatos3 = {recopilarDatos3}></SeleccionarReserva>
            </div>
        </>

    )
}

export default Contacto