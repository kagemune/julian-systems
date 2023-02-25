import React from 'react'
import "../css/acercade.css"
import pcRepair from '../img/yakov_Daza_red_pc_repair_set_up1.png'
function Acercade() {
    return (
        <div className='acercade' id='about'>
            <div className='imagenacercade'>
                <div className="cuadrado"></div>
                <img src={pcRepair} alt="red pc repair" />
            </div>
            <div className='contenidoacercade'>
                <h2>Acerca de</h2>
                <br />
                <p>
                En un mundo cada vez más dependiente de la tecnología, sabemos lo importante que es para nuestros clientes contar con dispositivos electrónicos que funcionen correctamente y estén en perfectas condiciones. Es por eso que ofrecemos una amplia gama de servicios especializados en electrónica para ayudar a nuestros clientes a mantener sus dispositivos en óptimas condiciones. </p>
                <br />
                <p>
                En nuestro negocio, valoramos la calidad y la eficiencia en cada uno de nuestros servicios, lo 
                que nos permite              garantizar la satisfacción de nuestros clientes. Además, trabajamos 
                con los mejores proveedores del mercado para                ofrecer productos de alta calidad y durabilidad.

                </p>
            </div>

        </div>
    )
}

export default Acercade