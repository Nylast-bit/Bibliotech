import express from "express";
import { createBook } from "../controllers/book.controllers";

const router = express.Router();

router.post("/book", createBook)

export default router;