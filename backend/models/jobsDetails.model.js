import mongoose from "mongoose";

const jobsDetails = new mongoose.Schema(
  {
   title : {
    type : String ,
    required : true ,
    minlength : 3
   },
   jobDetailImg : {
    type : String ,
    reqiured : true 
   },
   description : {
    type : String ,
    required : true ,
   },
   resumefile : {
    type : String ,
    required : true 
   },
      

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
