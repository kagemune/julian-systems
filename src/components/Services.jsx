import React from 'react'
import '../css/services.css'


function Services( { texto } ) {

return (

        <>
            <div className ={texto} id="servicios" >
                <div className="image">
                    <div className="cuadrado" ></div>
                    <img src="" alt="" />
                </div>
                <div className='description'>
                    <h1>descripcion dd</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt ipsa quaerat exercitationem, consequatur error odit facilis officia rerum hic, unde, fuga voluptatibus delectus libero aspernatur quasi harum explicabo dignissimos.</p>
                </div>

            </div>
        </>
    )
}

export default Services