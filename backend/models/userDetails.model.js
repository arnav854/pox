import mongoose from "mongoose";

const userDetails = new mongoose.Schema(
  {
   title: {
    type : String ,
    required : true 
   },
   resumefile : {
    type : String ,
    required : true 
   },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("UserDetails", userDetails);

export default UserDetails;
