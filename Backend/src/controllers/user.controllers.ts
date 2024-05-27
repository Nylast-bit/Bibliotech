import { Request, Response, /*response NextFunction */} from "express";

import { createUserService, getAllUsersService, getUserService, updateUserService, deleteUserService} from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  
  const { usuario, contrasena, correo_electronico, tipo_usuario } = req.body;

  try {
    const response = createUserService(usuario, contrasena, correo_electronico, tipo_usuario);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllUsers = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllUsersService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getUser = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  try {
    
    const response = await getUserService(request);

    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const updateUser = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  const { usuario, contrasena, correo_electronico, tipo_usuario} = req.body;
  try {
    
    const response = await updateUserService(request, usuario, contrasena, correo_electronico, tipo_usuario);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  
  try {
    
    const response = await deleteUserService(request);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

