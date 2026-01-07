import express from "express";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);

export default router;
