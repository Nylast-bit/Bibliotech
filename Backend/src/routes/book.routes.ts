import express from "express";
import { createBook, getAllBooks, getBook , updateBook, deleteBook, getBookByName} from "../controllers/book.controllers";

const router = express.Router();

router.post("/book", createBook)
router.get("/book", getAllBooks)
router.get("/book/:id", getBook)
router.get("/bookbyname", getBookByName)
router.put("/book/:id", updateBook)
router.delete("/book/:id", deleteBook)

export default router;