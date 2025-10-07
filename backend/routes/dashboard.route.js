import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getDashBoardPage } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/",protectRoute, getDashBoardPage );



export default router;