import { useState } from "react"
import React  from 'react'

function IrArriba() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100){
            setVisible(true)
        } 
        else if (scrolled <= 100){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <span className="irArriba" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>&#187;
        </span>
    );

}

export default IrArriba