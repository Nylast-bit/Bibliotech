import {  useEffect, useRef, useState } from 'react'
import './index.css'

function SoloLetras(event: { key: string; target: { value: string } }) {

    const soloLetrasRegex = /^[A-Za-z\s]+$/;

    if (!soloLetrasRegex.test(event.key))
    {
        event.preventDefault();
    }
};

function SoloLetras2(event: { key: string; target: { value: string } }) {

    const soloLetrasRege = /^[A-Za-z\s.,":()\/@]+$/;

    if (!soloLetrasRege.test(event.key))
    {
        event.preventDefault();
    }
};

const MenuBook = () => {

    useEffect(() => {

        document.getElementById('SubirImagen')?.addEventListener('change', function (event){

            const Molde = document.getElementById('ImagenLibro');

            if (Molde && event.target.files)
            {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = function(e)
                {
                    if (e.target)
                    {
                        Molde.style.backgroundImage = `url('${e.target.result}')`;

                        Molde.style.backgroundColor = '#000000';

                        Molde.textContent = "";
                    }
                     
                    else
                    {
                        Molde.textContent = "Añadir imagen de libro";
                    }
                };
                                        
                reader.readAsDataURL(file);
            }
        });

    }, []);


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
                <div id="divInferiorDerecho">
                    <div id="divFormulario">
                        <div id="divCirculoAzul">
                            <div id="ImagenLibro" onClick={() => { const inputFile = document.getElementById('SubirImagen'); if (inputFile) { inputFile.click(); } }}>Añadir imagen de libro</div>
                            <input id="SubirImagen" type="file" style={{ display: 'none' }} accept=".png, .jpg, .jpeg" />
                        </div>
                        <div id="divCampos">
                            <input id="NombreLibro" placeholder='Nombre del libro' className='campos' type='text' onKeyDown={SoloLetras}/>
                            <input id="NombreAutor" placeholder='Nombre del Autor' className='campos' type='text'  onKeyDown={SoloLetras}/>
                            <input id="CategoriaLibro" placeholder='Categoría del Libro' className='campos' type='text'  onKeyDown={SoloLetras}/>
                            <textarea id="DescripciónLibro" placeholder='Descripción del Libro' className='campos' onKeyDown={SoloLetras2} />
                            <div id="divCamposButtons">
                                <button className='CamposButtons' style={{backgroundColor: '#E4F4FF', color: '#000000', fontWeight: 'bold'}}>Cancelar</button>
                                <button className='CamposButtons' style={{backgroundColor: '#136CAA', color: '#FFFFFF'}}>Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuBook