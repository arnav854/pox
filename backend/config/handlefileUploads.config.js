import jobDetails from "../models/jobsDetails.model.js";
import { uploadFile } from "./imagerykit.js";

export const  handleJobImageDetails = async (req , res ) =>{
    try {
        const fileUrl = await uploadFile(req, res )
        if ( !fileUrl ) return res.status(400).json({err : "Please Uplaod Job detail Image "})
            console.log( fileUrl )
        const job = await  jobDetails.create({
                resume : {
                    resumeImg : fileUrl
                }
        })
        
        return res.status(200).json({success :"Successfully added image "});

    }catch ( err ){
        console.log ( err , " Error in  handleJobImageDetails")
        return res.status(500).json({err : "Internal server error "})
    }
}