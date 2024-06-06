import { useState } from 'react'
import './index.css'

const MenuBook = () => {

    return (
        <>
            <div id="divInferior">
                <div id="divInferiorIzquierdo">
                    <h1 id="h1CategoriaRelacionada">Categorías</h1>
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
                    <div id="divContenedor">
                        <div id="imgBack"/>
                        <div id="divLibro">
                            <div id="div-imgLibro">
                                <div id="divCirculo_de_Mierda">
                                    <img id="imgLibro"/>
                                </div>
                            </div>
                            <div id="divInfoLibro">
                                <h1 id="h1TituloLibro">El Principito</h1>
                                <h2 id="h2Autor">Antoine de Saint-Exupéry</h2>
                                <div id="divCalificación">
                                    <div className="Star"/>
                                    <div className="Star"/>
                                    <div className="Star"/>
                                    <div className="Star"/>
                                    <div className="Star half"/>
                                </div>
                                <div id="div-h3Categoria">
                                    <h3 id="h3Categoria">Children’s literature</h3>
                                </div>
                                <h3 id="h3Info">The Little Prince, the protagonist of the story, is a very unique boy who lives on a distant asteroid, and who in his innocence is the bearer of great wisdom. He arrives on Earth after a long space journey, looking for someone who can draw a lamb.</h3>
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