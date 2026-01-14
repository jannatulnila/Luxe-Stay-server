import express from "express";
import { registerUser, loginUser } from "./user.controller.js";
import { User } from "./user.model.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";
import { verifyAdmin } from "../../middlewares/verifyAdmin.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔐 Admin only route (Manage Members / Users)
router.get(
  "/all",
  verifyJWT,
  verifyAdmin,
  async (req, res) => {
    const users = await User.find();
    res.send(users);
  }
)

export default router;
