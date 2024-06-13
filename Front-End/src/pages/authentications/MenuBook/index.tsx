import { useState } from 'react'
import './index.css'
import Cometa from "../../../assets/cometa.png"
import Buffy from "../../../assets/BuffyCazavampiros.png"
import MM from "../../../assets/MM.png"
import RB from "../../../assets/RG.png"

const MenuBook = () => {

    return (
        <>
            <div id="divInferior">
                <div id="divInferiorIzquierdo">
                    <h1 id="h1CategoriaRelacionada">Categoría relacionada</h1>
                    <div id="divRecomendados">
                        <img className="LibrosRecomendados" style={{ backgroundImage: `url(${Cometa})`}}/>
                        <img className="LibrosRecomendados" style={{ backgroundImage: `url(${Buffy})`}}/>
                        <img className="LibrosRecomendados" style={{ backgroundImage: `url(${MM})`}}/>
                        <img className="LibrosRecomendados" style={{ backgroundImage: `url(${RB})`}}/>
                        <br></br><br></br><br></br>
                    </div>
                </div>
                <div id="divInferiorDerecho">
                    <div id="divContenedor">
                        <div id="imgBack" />
                        <div id="divLibro">
                            <div id="div-imgLibro">
                                <div id="divCirculo_de_Mierda">
                                    <img id="imgLibro" />
                                </div>
                            </div>
                            <div id="divInfoLibro">
                                <h1 id="h1TituloLibro">El Principito</h1>
                                <h2 id="h2Autor">Antoine de Saint-Exupéry</h2>
                                <div id="divCalificación">
                                    <div className="Star" />
                                    <div className="Star" />
                                    <div className="Star" />
                                    <div className="Star" />
                                    <div className="Star half" />
                                </div>
                                <div id="div-h3Categoria">
                                    <h3 id="h3Categoria">Literatura infantil</h3>
                                </div>
                                <h3 id="h3Info">El Principito, protagonista de la historia, es un niño muy singular que vive en un asteroide lejano y que, en su inocencia, es portador de una gran sabiduría. Llega a la Tierra tras un largo viaje espacial, buscando a alguien que sepa dibujar un cordero.</h3>
                                <button id="btnComprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuBook