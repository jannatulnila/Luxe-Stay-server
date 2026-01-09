// import express from "express";
// import cors from "cors";
// import routes from "./routes/index.js";

// const app = express();

// app.use(cors({
//   origin: ["http://localhost:3000"],
//   credentials: true
// }));
// app.use(express.json());

// app.use("/api/v1", routes);

// export default app;

import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);


export default app;
