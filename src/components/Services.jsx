import React from 'react'
import '../css/services.css'


function Services( { key, texto, img, descripcion, titulo} ) {

return (

        <>
            <div className ={texto} id={key} >
                <div className="image">
                    <div className="cuadrado" ></div>
                    <img src={img} alt="" />
                </div>
                <div className='description'>
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>

            </div>
        </>
    )
}

export default Services