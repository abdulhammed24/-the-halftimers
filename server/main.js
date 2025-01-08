import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/auth", authRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
