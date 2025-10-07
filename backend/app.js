// app.js
import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

// Example: import routes later like
// import userRoutes from "./routes/user.routes.js";
// app.use("/api/users", userRoutes);

export default app;
