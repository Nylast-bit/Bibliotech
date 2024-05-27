import express from "express";
import { createExemplary,getAllExemplary,getExemplary, updateExemplary,deleteExemplary } from "../controllers/exemplary.controllers";

const router = express.Router();

router.post("/exemplary", createExemplary)
router.get("/exemplary", getAllExemplary)
router.get("/exemplary/:id", getExemplary)
router.put("/exemplary/:id", updateExemplary)
router.delete("/exemplary/:id", deleteExemplary)

export default router;