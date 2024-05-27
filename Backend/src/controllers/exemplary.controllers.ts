import { Request, Response, /*response NextFunction */} from "express";

import { createExemplaryService, getAllExemplaryService, getExemplaryService, updateExemplaryService, deleteExemplaryService} from "../services/exemplary.service";

export const createExemplary = async (req: Request, res: Response) => {
  
  const { fecha_adquisicion, ubicacion_libreria, precio, estado, tipo_tapa, id_libro} = req.body;

  try {
    const response = createExemplaryService(fecha_adquisicion, ubicacion_libreria, precio, estado, tipo_tapa, id_libro);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllExemplary = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllExemplaryService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getExemplary = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    try {
      
      const response = await getExemplaryService(request);
  
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
}


export const updateExemplary = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    const { fecha_adquisicion, ubicacion_libreria, precio, estado, tipo_tapa, id_libro } = req.body;
    try {
      
      const response = await updateExemplaryService(request, fecha_adquisicion, ubicacion_libreria, precio, estado, tipo_tapa, id_libro);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteExemplary = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    
    try {
      
      const response = await deleteExemplaryService(request);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }
  