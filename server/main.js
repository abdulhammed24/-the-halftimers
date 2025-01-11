import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://the-halftimers.onrender.com/",
  "http://localhost:3000",
  "https://the-halftimers.vercel.app/",
];

// Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/auth", authRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
