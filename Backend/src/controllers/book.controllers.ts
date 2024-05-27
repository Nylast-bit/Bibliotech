import { Request, Response, /*response NextFunction */} from "express";
//import { NextResponse } from 'next/server'
import { createBookService, getAllBooksService, getBookService, updateBookService, deleteBookService} from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
  
  const { isbn, titulo, autor, editorial, fecha_edicion, calificacion } = req.body;

  try {
    const response = createBookService(isbn, titulo, autor, editorial, fecha_edicion, calificacion);
    res.status(200).json(response);
  } catch (error) {
    
  }
}

export const getAllBooks = async ( req: Request, res: Response) => {
  
  try {
    req._read(1); 
    const response = await getAllBooksService();
    res.status(200).json(response);

    
  } catch (error) {
    res.status(400).json({error: "Error"})

  }
}

export const getBook = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  try {
    
    const response = await getBookService(request);

    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const updateBook = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  const { isbn, titulo, autor, editorial, fecha_edicion, calificacion } = req.body;
  try {
    
    const response = await updateBookService(request, isbn, titulo, autor, editorial, fecha_edicion, calificacion);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

export const deleteBook = async ( req: Request, res: Response) => {
  const request = parseInt(req.params.id)
  
  try {
    
    const response = await deleteBookService(request);
    
    res.status(200).json(response);

  } catch (error) {
    console.log(error);
  }
}

