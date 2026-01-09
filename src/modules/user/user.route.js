// import express from "express";
// import { UserController } from "./user.controller.js";

// const router = express.Router();

// router.post("/", UserController.createUser);
// router.get("/", UserController.getUsers);

// export default router;
import express from "express";
import { registerUser } from "./user.controller.js";

const router = express.Router();

router.post("/register", registerUser);

export default router;

