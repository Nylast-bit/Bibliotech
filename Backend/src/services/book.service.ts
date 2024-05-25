import prisma from "../../lib/prisma";

export async function createBookService(
    isbn: number,
    titulo: string,
    autor: string, 
    editorial: string,
    year_edicion: number, 
    genero: string,
    calificacion: any
) {
    try {
        const createdBook = await prisma.libro.create({
            data: {
                ISBN: isbn,
                TITULO: titulo,
                AUTOR: autor,
                EDITORIAL: editorial,
                YEAR_EDICION: year_edicion,
                GENERO: genero, 
                CALIFICACION: calificacion
            }
        });

        return createdBook;
    } catch (error: any) {
        throw new Error(error);
    }
}