import { v2 as cloudinary } from "cloudinary";

const connectCloduinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
  console.log("Connected to Cloudinary");
};

export default connectCloduinary;
