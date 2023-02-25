import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Services from './components/Services';
import Contacto from './components/Contacto';
import Acercade from './components/Acercade';
import Lines from './components/Lines';
import whatsappButton from './img/Whatsapp1.png'
import IrArriba from './components/IrArriba';



function App() {

  
  return (
    <div className="App">
      <IrArriba/>
      <div className='contenido'>
        <Navbar/> 
        <Slide/>
        <div className='main'>
          <div className="aside">
            <a href="https://wa.me/573172451292" target="_blank" rel="noreferrer"><img src={whatsappButton} alt="link wahtasapp" /></a>
          </div>
          <article>
            <Acercade/>
            <h2>Servicios</h2>
            <br />
            <p>servicio de mantenimiento de dispositivos electrónicos especializados para garantizar el correcto funcionamiento y rendimiento de los dispositivos electrónicos, como PC, smartphones, laptops, videoconsolas, TV, audio, entre otros.</p>
            <Services texto ="cajaservicios izq" />
            <Services texto ="cajaservicios" />
            <br />
            <p>el servicio de mantenimiento de dispositivos electrónicos es una solución eficaz para prolongar la vida útil de los dispositivos y garantizar su correcto funcionamiento. Los proveedores de servicios ofrecen una amplia gama de servicios para satisfacer las necesidades individuales de cada usuario.</p>
            <br />
            <Lines/>
            <Contacto/>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
