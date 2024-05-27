
import prisma from "../../lib/prisma";

export async function createSellService(
    cantidad_libros : number,
    impuestos : any, 
    subtotal : any, 
    total : any, 
    num_ejemplar : number, 
    id_usuario : number,
    ejemplar : any,
    usuario : any

) {
    try {
        const createdSell = await prisma.ventas.create({
            data: {
                CANTIDAD_LIBROS: cantidad_libros,
                IMPUESTOS: impuestos,
                SUBTOTAL: subtotal,
                TOTAL: total,
                NUM_EJEMPLAR: num_ejemplar,
                ID_USUARIO: id_usuario,
                ejemplar : ejemplar,
                usuario : usuario

            }
        });

        return createdSell;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getAllSellsService(){
    try {
        const requestedSells = await prisma.ventas.findMany();
        return requestedSells;
        
    } catch (error: any) {
        console.error("Error fetching Sells:", error);
        throw new Error("Unable to fetch Sells. Please try again later.");
    }
}

export async function getSellService(id: number) 
{
    try {
        const requestedSell = await prisma.ventas.findUnique({
            where: {
                ID_VENTAS: id,
            }
        })
        
        return requestedSell;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateSellService(
    id: number,
    cantidad_libros : number,
    impuestos : any, 
    subtotal : any, 
    total : any, 
    num_ejemplar : number, 
    id_usuario : number 
) 
{
    try {
        const requestedSell = await prisma.ventas.update({
            where: {ID_VENTAS: id},
            data: {
                CANTIDAD_LIBROS: cantidad_libros,
                IMPUESTOS: impuestos,
                SUBTOTAL: subtotal,
                TOTAL: total,
                NUM_EJEMPLAR: num_ejemplar,
                ID_USUARIO: id_usuario
            }
        })
        
        return requestedSell;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteSellService(
    id: number,

) 
{
    try {
        const requestedSell = await prisma.ventas.delete({
            where: {ID_VENTAS: id,},
            
        })
        
        return requestedSell;
    } catch (error: any) {
        throw new Error(error);
    }
}