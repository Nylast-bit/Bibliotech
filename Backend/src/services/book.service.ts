import prisma from "../../lib/prisma";

export async function createBookService(
    isbn: number,
    titulo: string,
    autor: string, 
    editorial: string,
    fecha_edicion: string, 
    calificacion: any
) {
    try {
        const createdBook = await prisma.libro.create({
            data: {
                ISBN: isbn,
                TITULO: titulo,
                AUTOR: autor,
                EDITORIAL: editorial,
                FECHA_EDICION: fecha_edicion,
                CALIFICACION: calificacion
            }
        });

        return createdBook;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getAllBooksService(){
    try {
        const requestedBooks = await prisma.libro.findMany();
        console.log(requestedBooks);
        return requestedBooks;
        
    } catch (error: any) {
        console.error("Error fetching books:", error);
        throw new Error("Unable to fetch books. Please try again later.");
    }
}

export async function getBookService(id: number) 
{
    try {
        const requestedBook = await prisma.libro.findUnique({
            where: {
                ID_LIBRO: id,
            }
        })
        
        return requestedBook;
    } catch (error: any) {
        throw new Error(error);
    }
}