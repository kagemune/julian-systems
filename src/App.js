import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Services from './components/Services';
import Contacto from './components/Contacto';
import Lines from './components/Lines';
import whatsappButton from './img/Whatsapp1.png'



function App(){

  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      res => res.json()
    ).then(
      dato =>{
        setData(dato)
        console.log(dato)
      }
    )},[]
  )


  return (

    <div className="App">
      <div className='contenido'>
        <Navbar /> 
        <Slide />
        
        <div className='main'>
          <div className="aside">
            <a href="wa.me/573197765744"><img src={whatsappButton} alt="link wahtasapp"/> </a>
          </div>
          <article>
            <h2>Servicios</h2>

              {(typeof data ==='undefined')?(
                <p className='loading'>cargando...</p>
              ) : (
                data.map((service, i) => (
                  <p>
                    <Services key={i} texto={(i % 2 === 0)?("cajaservicios"):("cajaservicios izq")} titulo={service[1]} descripcion={service[2]}/>
                  </p>
                ))
              )}

            <Lines/>
            <Contacto/>
          </article>
        </div>
      </div>
    </div>
  )



}

export default App;
