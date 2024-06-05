import { useState } from 'react'
import CarritoCompras from '../../../assets/CarritoCompras.png'
import Lupa from '../../../assets/lupa.png'
import BackArrow from '../../../assets/BackArrow.png'
import './index.css'

const Navbar = () => {


    return (
        <>
            <div id="divBarraSuperior">
                <img id="imgBarraSuperiorCarrito" src={CarritoCompras}/>
                <h1 id="h1Bibliotech">BiblioTech</h1>
                <div id="divBarraBusqueda">
                    <input id="textBusqueda" type='text' placeholder="Search..."/>
                    <input id="buttonBusqueda" src={Lupa} type='button'/>
                </div>
                <h1 id="h2Inicio">Inicio</h1>
                <button id="btnPerson"></button>
                <button id="btnSetings"></button>
            </div>
        </>
    )
}

export default Navbar