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

export async function updateBookService(
    id: number,
    isbn: number,
    titulo: string,
    autor: string, 
    editorial: string,
    fecha_edicion: string, 
    calificacion: any
) 
{
    
    try {
        const requestedBook = await prisma.libro.update({
            where: {ID_LIBRO: id},
            data: {
                ISBN: isbn, 
                TITULO: titulo, 
                AUTOR: autor, 
                EDITORIAL: editorial, 
                FECHA_EDICION: fecha_edicion, 
                CALIFICACION: calificacion
            }
        })
        
        return requestedBook;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteBookService(
    id: number,

) 
{
    try {
        const requestedBook = await prisma.libro.delete({
            where: {ID_LIBRO: id,},
            
        })
        
        return requestedBook;
    } catch (error: any) {
        throw new Error(error);
    }
}