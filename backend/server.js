import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToDatabase from "./db/database.js"
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();


app.use(cors({
    origin:  "http://localhost:5173",
    credentials: true,
}));

// JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse cookies
app.use(cookieParser());

// Routes
// app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectToDatabase();
});