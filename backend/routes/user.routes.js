import express from "express";
import { login, logout, signup, getMe , sendResetOtp , resetPassword , verifyOtp} from "../controllers/auth.controller.js";
// import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/logout", logout);

export default router;