import { Request, Response, NextFunction } from "express";
import { createBookService } from "../services/book.service";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  
  const { isbn, titulo, autor, editorial, year_edicion, genero, calificacion } = req.body;

  try {
    const response = createBookService(isbn, titulo, autor, editorial, year_edicion, genero, calificacion);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}