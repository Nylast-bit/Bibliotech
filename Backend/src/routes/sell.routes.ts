import express from "express";
import { createSell, getAllSells, getSell , updateSell, deleteSell} from "../controllers/sell.controllers";

const router = express.Router();

router.post("/sell" ,createSell)
router.get("/sell", getAllSells)
router.get("/sell/:id", getSell)
router.put("/sell/:id", updateSell)
router.delete("/sell/:id", deleteSell)

export default router;