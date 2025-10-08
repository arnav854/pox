import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import  upload from "../config/multerconfig.js" 
import { handleJobImageDetails } from "../config/handlefileUploads.config.js";



const router = express.Router();

router.post("/upload",upload.single('file'), handleJobImageDetails );




export default router;