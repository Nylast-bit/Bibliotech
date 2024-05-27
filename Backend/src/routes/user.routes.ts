import express from "express";
import { createUser, getAllUsers, getUser , updateUser, deleteUser} from "../controllers/user.controllers";

const router = express.Router();

router.post("/user", createUser)
router.get("/user", getAllUsers)
router.get("/user/:id", getUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export default router;