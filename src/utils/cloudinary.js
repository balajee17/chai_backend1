import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // console.log(localFilePath,'filr')
    if (!localFilePath) return null;
    //upload the file on cloudinary
    // console.log('hlw')
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been upload successfully
    // console.log("file is uploaded on cloudinary", response);
    await fs.unlinkSync(localFilePath)
    // console.log(response,'response')
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporaray file as the upload operations got failed 
    return null;

  }
};

export {uploadOnCloudinary}


