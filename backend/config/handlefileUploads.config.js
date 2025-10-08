import jobDetails from "../models/jobsDetails.model.js";
import { uploadFile } from "./imagerykit.js"; 

export const handleJobImageDetails = async (req, res) => {
  try {
    const fileUrl = await uploadFile(req); 
    if (!fileUrl) {
      return res.status(400).json({ err: "Please upload job detail image" });
    }

    const job = await jobDetails.create({
      resume: {
        resumeImg: fileUrl,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Successfully added image",
      job,
    });
  } catch (err) {
    console.error("❌ Error in handleJobImageDetails:", err);
    return res.status(500).json({
      err: "Internal server error",
      details: err.message,
    });
  }
};
