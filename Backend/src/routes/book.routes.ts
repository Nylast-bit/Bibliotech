import express from "express";
import { createBook, getAllBooks, getBook } from "../controllers/book.controllers";

const router = express.Router();

router.post("/book", createBook)
router.get("/book", getAllBooks)
router.get("/book/:id", getBook)

export default router;