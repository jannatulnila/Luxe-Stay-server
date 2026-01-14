import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.route.js";

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;
