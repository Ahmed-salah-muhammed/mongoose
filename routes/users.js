import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deletedUserById,
} from "../controllers/users.js";

const router = Router();

// Routes

router.get("/usres", getUsers);

router.get("/usres/:id", getUserById);

router.post("/usres", createUser);

router.put("/usres", updateUserById);

router.delete("/usres", deletedUserById);

export default router;
