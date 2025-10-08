import mongoose from "mongoose";

const jobsDetailsSchema = new mongoose.Schema(
  {
     resume : {
        resumeImg : {
          type : String ,
          required : true ,
        },
        score : {
          type : Number ,
          default : 0 
        }
     }


  },
  { timestamps: true }
);

const jobDetails = mongoose.model("jobDetails", jobsDetailsSchema);

export default jobDetails;
