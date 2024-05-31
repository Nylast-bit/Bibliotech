import prisma from "../../lib/prisma";

export async function getAllUsersService(){
    try {
        const requestedUsers = await prisma.usuario.findMany();
        return requestedUsers;
        
    } catch (error: any) {
        console.error("Error fetching Users:", error);
        throw new Error("Unable to fetch Users. Please try again later.");
    }
}

export async function getUserService(id: number) 
{
    try {
        const requestedUser = await prisma.usuario.findUnique({
            where: {
                ID_USUARIO: id,
            }
        })
        
        return requestedUser;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateUserService(
    id: number,
    contrasena: string,
    correo_electronico: string, 
    tipo_usuario: string,
) 
{
    try {
        const requestedUser = await prisma.usuario.update({
            where: {ID_USUARIO: id},
            data: {
                CONTRASENA: contrasena,
                CORREO_ELECTRONICO: correo_electronico,
                TIPO_USUARIO: tipo_usuario
            }
        
        })
        
        return requestedUser;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function deleteUserService(
    id: number,

) 
{
    try {
        const requestedUser = await prisma.usuario.delete({
            where: {ID_USUARIO: id,},
            
        })
        
        return requestedUser;
    } catch (error: any) {
        throw new Error(error);
    }
}