import { Request, Response, /*response NextFunction */} from "express";

import { createSellService, getAllSellsService, getSellService, updateSellService, deleteSellService} from "../services/sell.service";

export const createSell = async (req: Request, res: Response) => {
  
  const { cantidad_libros, precio, num_ejemplar, id_usuario, ejemplar, usuario} = req.body;

  try {
    const response = createSellService(cantidad_libros, precio * 0.18, precio * cantidad_libros, ((precio * 0.18) +(precio * cantidad_libros)), num_ejemplar, id_usuario, ejemplar, usuario);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllSells = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllSellsService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getSell = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  try {
    
    const response = await getSellService(request);

    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const updateSell = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  const { cantidad_libros, precio, num_ejemplar, id_usuario} = req.body;
  try {
    
    const response = await updateSellService(request, cantidad_libros, precio * 0.18, precio * cantidad_libros, ((precio * 0.18) +(precio * cantidad_libros)), num_ejemplar, id_usuario);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const deleteSell = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  
  try {
    
    const response = await deleteSellService(request);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

