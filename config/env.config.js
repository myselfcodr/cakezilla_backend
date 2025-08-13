import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  DB_URI,
  JWT_EXPIRY,
  EMAIL_VERIFY_TOKEN_SECRET_KEY,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  MAIL_EMAIL,
  DOMAIN_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECTET,
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
} = process.env;

const envConfig = {
  PORT,
  DB_URI: DB_URI || "mongodb+srv://myselfcodr:8878822433@cakezilla.tsiebfi.mongodb.net/?retryWrites=true&w=majority&appName=CAKEZILLA",
  JWT_EXPIRY,
  EMAIL_VERIFY_TOKEN_SECRET_KEY,
  // Mail creadential
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  MAIL_EMAIL,
  DOMAIN_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECTET,
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
};

export default envConfig;
