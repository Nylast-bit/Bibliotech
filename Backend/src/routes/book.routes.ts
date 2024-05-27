import express from "express";
import { createBook, getAllBooks, getBook , updateBook, deleteBook} from "../controllers/book.controllers";

const router = express.Router();

router.post("/book", createBook)
router.get("/book", getAllBooks)
router.get("/book/:id", getBook)
router.put("/book/:id", updateBook)
router.delete("/book/:id", deleteBook)

export default router;