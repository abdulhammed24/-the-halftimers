import express from "express";
import {
  register,
  login,
  forgotPassword,
  verifyEmail,
  resetPassword,
  verifyEmailToken,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-email", verifyEmail);
router.get("/verify-email/:token", verifyEmailToken);

export default router;
