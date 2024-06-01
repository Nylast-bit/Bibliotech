import { useState } from 'react'
import CarritoCompras from '../../../assets/CarritoCompras.png'
import Lupa from '../../../assets/lupa.png'
import './index.css'

const Home = () => {


    return (
        <>
        <div id="divBody">
            <div id="divBarraSuperior">
                <img id="imgBarraSuperiorCarrito" src={CarritoCompras}/>
                <h1 id="h1Bibliotech">BiblioTech</h1>
                <div id="divBarraBusqueda">
                    <input id="textBusqueda" type='text' placeholder="Search..."/>
                    <input id="buttonBusqueda" src={Lupa} type='button'/>
                </div>
                <h1 id="h2Inicio">Inicio</h1>
            </div>
            <div id="divInferior">
                <div id="divInferiorIzquierdo">
                    <h1 id="h1Categorias">Categorias</h1>
                    <div id="divCategorias">
                        <button className="CatogoriasButtons">Romance</button>
                        <button className="CatogoriasButtons">Historia</button>
                        <button className="CatogoriasButtons">Filosofía</button>
                        <button className="CatogoriasButtons">Ficción</button>
                        <button className="CatogoriasButtons">No Ficción</button>
                        <button className="CatogoriasButtons">Literatura Infantil</button>
                        <button className="CatogoriasButtons">Juvenil</button>
                        <button className="CatogoriasButtons">Poesía</button>
                        <button className="CatogoriasButtons">Teatro</button>
                        <button className="CatogoriasButtons">Comics</button>
                    </div>
                </div>
                <div id="divInferiorDerecho">

                </div>
            </div>
        </div>
        </>
    )
}

export default Home