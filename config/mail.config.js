import nodemailer from "nodemailer";
import envConfig from "../config/env.config.js";

// Debugging ke liye log kar lo
console.log("SMTP Config:", {
  user: envConfig.MAIL_USER,
  pass: envConfig.MAIL_PASS ? "Provided" : "Missing",
});

// Create transporter
const transporter = nodemailer.createTransport({
  host: envConfig.SMTP_HOST,
  port: envConfig.SMTP_PORT,
  service: "gmail",
  secure: false,
  auth: {
    user: envConfig.MAIL_USER,
    pass: envConfig.MAIL_PASS,
  },
});

export default transporter;
