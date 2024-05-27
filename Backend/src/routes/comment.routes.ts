import express from "express";
import { createComment,getAllComment,getComment, updateComment,deleteComment } from "../controllers/comment.controllers";

const router = express.Router();

router.post("/comment", createComment)
router.get("/comment", getAllComment)
router.get("/comment/:id", getComment)
router.put("/comment/:id", updateComment)
router.delete("/comment/:id", deleteComment)

export default router;