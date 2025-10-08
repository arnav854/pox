import axios from "axios";
import FormData from "form-data";


export const uploadFile = async ( req, res ) =>{
    try {
        const fileBuffer = req.file.buffer; 
        const fileName = req.file.originalname;
        const form = new FormData();
        form.append("file", fileBuffer.toString("base64"));
        form.append("fileName", fileName);

        const response = await axios.post(IMAGEKIT_UPLOAD_URL, form, {
        headers: {
            ...form.getHeaders(),
            Authorization: `Basic ${Buffer.from(IMAGEKIT_PRIVATE_KEY + ":").toString("base64")}`,
        },
        });

        const fileUrl = response.data.url;
        return fileUrl

    }catch(err) {
        console.log (err, "Error in upload file ")
        return res.status(500).json({msg : "eInternal server error "})
    }
}
