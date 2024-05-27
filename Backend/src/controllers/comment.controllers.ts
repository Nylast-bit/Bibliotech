import { Request, Response, /*response NextFunction */} from "express";

import { createCommentService, getAllCommentService, getCommentService, updateCommentService, deleteCommentService} from "../services/comment.service";

export const createComment = async (req: Request, res: Response) => {
  
  const { descripcion_comentario, id_usuario,id_libro} = req.body;

  try {
    const response = createCommentService(descripcion_comentario, id_usuario,id_libro);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllComment = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllCommentService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getComment = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    try {
      
      const response = await getCommentService(request);
  
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
}


export const updateComment = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    const { descripcion_comentario, id_usuario,id_libro } = req.body;
    try {
      
      const response = await updateCommentService(request, descripcion_comentario, id_usuario, id_libro);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }

  export const deleteComment = async ( req: Request, res: Response) => {
    const request = parseInt(req.params.id)
    
    try {
      
      const response = await deleteCommentService(request);
      
      res.status(200).json(response);
  
    } catch (error) {
      console.log(error);
    }
  }
  