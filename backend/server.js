import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

import userRoutes from "./routes/user.routes.js";

// Load environment variables from .env
dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_DB_URI;

// Function to connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error connecting to Mongodb", error.message);
  }
};

// Start server after DB connection
const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`[INFO] Server running on port ${PORT}`); 
  });
};

app.use("/api/auth", userRoutes);

// Start everything
startServer();