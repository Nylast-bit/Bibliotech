import prisma from "../../lib/prisma";

export async function createExemplaryService(
    fecha_adquisicion: Date,
    ubicacion_libreria: string, 
    precio: any, 
    estado: string, 
    tipo_tapa: string, 
    id_libro: number
) {
    try {
        const createdExemplary = await prisma.ejemplar.create({
            data: {
                FECHA_ADQUISICION: fecha_adquisicion,
                UBICACION_LIBRERIA: ubicacion_libreria,
                PRECIO: precio,
                ESTADO: estado,
                TIPO_TAPA: tipo_tapa,
                libro: {
                    connect: { ID_LIBRO: id_libro }
                }
            }
        });

        return createdExemplary;
    } catch (error: any) {
        throw new Error(error);
    }
}


export async function getAllExemplaryService(){
    try {
        const requestedExemplary = await prisma.ejemplar.findMany();
        return requestedExemplary;
        
    } catch (error: any) {
        console.error("Error fetching Exemplarys:", error);
        throw new Error("Unable to fetch Exemplarys. Please try again later.");
    }
}

export async function getExemplaryService(id: number) 
{
    try {
        const requestedExemplary = await prisma.ejemplar.findUnique({
            where: {
                NUM_EJEMPLAR: id,
            }
        })
        
        return requestedExemplary;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateExemplaryService(
    id: number,
    fecha_adquisicion : Date,
    ubicacion_libreria : string, 
    precio : any, 
    estado : string, 
    tipo_tapa : string, 
    id_libro : number
) 
{
    try {
        const requestedExemplary = await prisma.ejemplar.update({
            where: {NUM_EJEMPLAR: id},
            data: {
                FECHA_ADQUISICION: fecha_adquisicion,
                UBICACION_LIBRERIA: ubicacion_libreria,
                PRECIO: precio,
                ESTADO: estado,
                TIPO_TAPA: tipo_tapa,
                ID_LIBRO: id_libro
            }
        })
        
        return requestedExemplary;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteExemplaryService(
    id: number,

) 
{
    try {
        const requestedExemplary = await prisma.ejemplar.delete({
            where: {NUM_EJEMPLAR: id,},
            
        })
        
        return requestedExemplary;
    } catch (error: any) {
        throw new Error(error);
    }
}