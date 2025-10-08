import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import  multer from 'multer'
import { handleJobImageDetails } from "../config/handlefileUploads.config.js";



const upload = multer()
const router = express.Router();

router.post("/upload",protectRoute,upload.single('file'), handleJobImageDetails );




export default router;