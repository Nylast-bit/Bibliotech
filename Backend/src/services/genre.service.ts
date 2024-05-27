import prisma from "../../lib/prisma";

export async function createGenreService(
    nombre_genero: string
) {
    try {
        const createdGenre = await prisma.genero.create({
            data: {
                NOMBRE_GENERO: nombre_genero,
            }
        });

        return createdGenre;
    } catch (error: any) {
        throw new Error(error);
    }
}


export async function getAllGenreService(){
    try {
        const requestedGenre = await prisma.genero.findMany();
        return requestedGenre;
        
    } catch (error: any) {
        console.error("Error fetching Genres:", error);
        throw new Error("Unable to fetch Genres. Please try again later.");
    }
}

export async function getGenreService(id: number) 
{
    try {
        const requestedGenre = await prisma.genero.findUnique({
            where: {
                ID_GENERO: id,
            }
        })
        
        return requestedGenre;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateGenreService(
    id: number,
    nombre_genero : string
) 
{
    try {
        const requestedGenre = await prisma.genero.update({
            where: {ID_GENERO: id},
            data: {
                NOMBRE_GENERO: nombre_genero
            }
        })
        
        return requestedGenre;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteGenreService(
    id: number,

) 
{
    try {
        const requestedGenre = await prisma.genero.delete({
            where: {ID_GENERO: id,},
            
        })
        
        return requestedGenre;
    } catch (error: any) {
        throw new Error(error);
    }
}