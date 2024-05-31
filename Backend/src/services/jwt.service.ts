import prisma from "../../lib/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function loginService(
    email: any,
    contrasena: any
): Promise< any | null> {
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                CORREO_ELECTRONICO: email,
            }
        });

        if(!user){
            return { success : false, response: "User not found"};
        }
        const isCorrect = await bcrypt.compare(contrasena, user.CONTRASENA);
        
        if(!isCorrect){
            return {success: false, response: "Incorrect credentials. Try Again"};
        }

        //TOKEN
        const token = jwt.sign({id: user.ID_USUARIO}, process.env.JWT_SECRET || "");

        const {  CONTRASENA: _, ...userData} = user;

        return {token, userData, success: true};
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function signupService(
    email: any, 
    contrasena: any,
    confirmar_contrasena: any,
    tipo_usuario: any,

): Promise< any | null> {
    try {
        const existingUser = await prisma.usuario.findUnique({ where: { CORREO_ELECTRONICO: email }});
        if(existingUser){
            return { success : false, response: "this email is taken"};
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
        
        if(!emailRegex.test(email)){
            return {success: false, response: "Invalid email format"};
        }
        
        console.log(contrasena, confirmar_contrasena)

        if (contrasena !== confirmar_contrasena){
            return {success: false, response: "Passwords doesn't match"};
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(contrasena,salt);
        
        await prisma.usuario.create({
            data: {
                CORREO_ELECTRONICO: email,
                CONTRASENA: hash,
                TIPO_USUARIO: tipo_usuario,

            }
        });

        return {success: true, response: "Account created succesfully"}
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}

