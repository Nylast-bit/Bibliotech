import { Request, Response, NextFunction } from "express";

import { signupService, loginService} from "../services/jwt.service";

export const login = async (req: Request, res: Response) => {
  
  const { correo_electronico, contrasena} = req.body;

  try {
    const response = await loginService(correo_electronico, contrasena);
    res.status(200).json(response);
  } catch (error) {
    console.log(error)
  }
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  
  const { nombre, correo_electronico, contrasena, confirmar_contrasena} = req.body;
console.log(nombre, correo_electronico, contrasena, confirmar_contrasena)
  try {
    const response = await signupService(nombre,correo_electronico, contrasena, confirmar_contrasena);
    res.status(200).json(response);
  } catch (error) {
    next(error);  
  }
}


