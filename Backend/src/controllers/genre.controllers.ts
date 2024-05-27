import { Request, Response, /*response NextFunction */} from "express";

import { createGenreService, getAllGenreService, getGenreService, updateGenreService, deleteGenreService} from "../services/genre.service";

export const createGenre = async (req: Request, res: Response) => {
  
  const { nombre_genero} = req.body;

  try {
    const response = createGenreService(nombre_genero);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllGenre = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllGenreService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getGenre = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    try {
      
      const response = await getGenreService(request);
  
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
}


export const updateGenre = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    const {nombre_genero} = req.body;
    try {
      
      const response = await updateGenreService(request, nombre_genero);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteGenre = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    
    try {
      
      const response = await deleteGenreService(request);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }
  