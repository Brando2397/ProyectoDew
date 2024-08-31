import React from "react";
import { useState } from "react";
import './contacto.css'

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
                    opacity:'1', transition: 'opacity 1.3s ease-in'}
            }),500))

       
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
                    opacity:'1', transition:'opacity 1.3s ease-in'}
            }),500))
        
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
                    opacity:'1', transition: 'left 0.3s ease-in, opacity 1.3s ease-in'}
            }),500))
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


function Formulario() {

    const [datos, setDatos] = useState({

        nombre: '',
        apellido: '',
        celular: '',
        email: '',
        dirrecion: '',
        mensaje: ''
    }
    )

    const cambiarDatos = (e) => {
        const { nombre, value } = e.target;

        setDatos({
            ...setDatos,
            [nombre]: value

        });

    }

    return (
        <>
            <form className="Formulario">

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

             



                <button className="boton_form" type="submit">Enviar</button>
            </form>

        </>
    )


}


function Contacto() {

    return (

        <>
            <div className="reservaContenedor">
                <LlenarFormulario></LlenarFormulario>
                <Formulario></Formulario>
            </div>
        </>

    )
}

export default Contacto