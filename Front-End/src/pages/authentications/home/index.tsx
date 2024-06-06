import { useState } from 'react'
import principito from "../../../assets/principito.png"
import cometa from "../../../assets/cometa.png"
import BC from "../../../assets/BuffyCazavampiros.png"
import MM from "../../../assets/MM.png"
import RG from "../../../assets/RG.png"
import PDP from "../../../assets/PDP.png"
import './index.css'

const Home = () => {


    return (
        <>
            <div id="divInferior">
                <div id="divInferiorIzquierdo">
                    <h1 id="h1Categorias">Categorías</h1>
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
                <div id="divInferiorDerecho2">
                    <div id="divContenedor2">
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${principito})`}} />
                            <h1 className="h1LibroNombre">El Prinipito</h1>
                        </div>
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${cometa})`}} />
                            <h1 className="h1LibroNombre">El Cometa</h1>
                        </div>
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${BC})`}} />
                            <h1 className="h1LibroNombre">Buffy Cazavampiros</h1>
                        </div>
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${MM})`}} />
                            <h1 className="h1LibroNombre">Magicos misterios</h1>
                        </div>
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${RG})`}} />
                            <h1 className="h1LibroNombre">Robot Gigantesco</h1>
                        </div>
                        <div className="Libros">
                            <div className="Images" style={{ backgroundImage: `url(${PDP})`}} />
                            <h1 className="h1LibroNombre">Policán</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home