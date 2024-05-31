import express from "express";
import { getAllUsers, getUser , updateUser, deleteUser} from "../controllers/user.controllers";

const router = express.Router();

router.get("/user", getAllUsers)
router.get("/user/:id", getUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)

export default router;