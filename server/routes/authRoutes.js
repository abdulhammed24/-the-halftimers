import express from "express";
import { register, login, forgotPassword, resetPassword, verifyEmailToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/verify-email/:token", verifyEmailToken);

export default router;
