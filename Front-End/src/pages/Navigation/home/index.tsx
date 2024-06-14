import { useState, useEffect } from 'react'
import './index.css'
import { getBooks } from '../../../API/books'
import BookItem from './item'

const Home = () => {

    const [books, setBooks] = useState<any>();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                setBooks(response);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
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
                <div id="divInferiorDerecho2">
                    <div id="divContenedor2">
                        {books?.map((book: any) => (
                            <BookItem
                                key={book.ID_LIBRO}
                                img={book.IMAGEURL}
                                title={book.TITULO}
                            />
                        ))}
                        <br /><br /><br /><br /><br />
                        <div style={{ height: '70%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home