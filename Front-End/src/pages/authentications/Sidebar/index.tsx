import React from 'react';
import './index.css';

const Sidebar = () => {
    return (
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
    );
}

export default Sidebar;
