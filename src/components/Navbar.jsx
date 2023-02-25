import React, { useState } from 'react'
import "../css/nav.css"
import esplogo from '../img/esp.svg';
import englogo from '../img/Flag_of_the_United_Kingdom.svg.png'
import logojulian from '../img/isologotipo RED  js.png'
function Navbar() {
    const [ lang,setLang ] = useState(englogo)

    const cambiarLenguajeicon = () =>{
        console.log('click')
        if (lang == englogo){
            setLang(esplogo)
        }
        else{
            setLang(englogo)
        }
        
    }


    return (

        <nav id='inicio'>
            <img className="logo" src={logojulian} alt="logo-julian-systems" />
            <div className='lang'>
                <ul>
                    <li className="menu"><a href="#inicio">Inicio</a></li>
                    <li className="menu"><a href="#blog">Blog</a></li>
                    <li className="menu"><a href="#contacto">Contacto</a></li>
                    <li className="menu"><a href="#servicios">Servicios</a></li>
                </ul>
                <button onClick={cambiarLenguajeicon}><img  className='banderita' src={lang} alt="bandera esp" /></button>
            </div>
        </nav>
        
    )
}

export default Navbar