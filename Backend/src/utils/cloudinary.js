import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinay = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const upload = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    if (fs.existsSync(localfilepath)) {
      fs.unlinkSync(localfilepath);
    }
    return upload;
  } catch (error) {
    console.log(error);
    if (fs.existsSync(localfilepath)) {
      fs.unlinkSync(localfilepath);
    }
    return null;
  }
};

export { uploadOnCloudinay };
