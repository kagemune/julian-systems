import React from 'react'
import '../css/contacto.css'
import QRfacebook from '../img/jsfacebookQR.png'
import QRwhatsapp from '../img/jswhatsappQR.png'
import telefonoLogo from '../img/telefono.png'


function Contacto() {
    return (
        <div className="redes" id='contacto'>
            <h2>Contacto</h2><br />
            <div className='asidecon'>
                <div className='tablaContacto'>
                <h3>Visitenos</h3>
                <br />
                <p>Cra. 38 #8a-1,Bodega Bacal local  Puente Aranda, Bogotá, Cundinamarca</p>
                <br />
                <h3>Contactenos</h3>
                <br />
                <p>al 3172451292 </p>
                </div>
                <div className='qr'>
                    <a href="https://www.facebook.com/juliansystems"  target="_blank" rel="noreferrer">
                        <img className="qrs"src={QRfacebook} alt="facebbok" />
                    </a>
                    <a href="https://wa.me/573172451292" target="_blank" rel="noreferrer">
                        <img className="qrs"src={QRwhatsapp} alt="whatsapp" />
                    </a>
                    <a href="tel:+573172451292" className='llamar'>
                        <img className="qrs"src={telefonoLogo} alt="llamar " />
                    </a>
                </div>
            </div>
            <iframe  className="mapa" title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8805228239403!2d-74.1056076852957!3d4.615392843676625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99edebdcf11d%3A0x29ab1eba45e01709!2sjulian%20systems!5e0!3m2!1ses!2sco!4v1674528866352!5m2!1ses!2sco" target="_blank" rel="noreferrer" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <br />
            <br />
        </div>

    )
}

export default Contacto