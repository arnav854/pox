import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  publicKey: "public_CzsbiVjzRbaNxtuGky/+3Lnh6Ek=",
  privateKey: "private_DL0qnWdNZNJskdAYHYqc10ttfSE=",
  urlEndpoint: "https://ik.imagekit.io/yyhk4cahp", 
});


export const uploadFile = async (req) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const base64File = req.file.buffer.toString("base64");

    const response = await imagekit.upload({
      file: base64File,
      fileName: req.file.originalname,
      folder: "/uploads",
    });

    console.log("✅ Uploaded to ImageKit:", response.url);
    return response.url; // ✅ return actual file URL

  } catch (error) {
    console.error("❌ Image upload failed:", error.message);
    throw new Error(error.message);
  }
};
