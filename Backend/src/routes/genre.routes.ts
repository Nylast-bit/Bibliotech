import express from "express";
import { createGenre,getAllGenre,getGenre, updateGenre,deleteGenre } from "../controllers/genre.controllers";

const router = express.Router();

router.post("/genre", createGenre)
router.get("/genre", getAllGenre)
router.get("/genre/:id", getGenre)
router.put("/genre/:id", updateGenre)
router.delete("/genre/:id", deleteGenre)

export default router;