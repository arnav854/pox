// server.js — Entry point of backend

import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

// Load environment variables from .env
dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_DB_URI;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\x1b[32m%s\x1b[0m", "[INFO] MongoDB Connected"); // green for success
  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", "[ERROR] MongoDB Connection Failed"); // red for error
    console.error(error);
    process.exit(1); // stop server if DB fails
  }
};

// Start server after DB connection
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log("\x1b[36m%s\x1b[0m", `[INFO] Server running on port ${PORT}`); // cyan for server info
  });
};

// Start everything
startServer();