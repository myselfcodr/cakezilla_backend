import mongoose from "mongoose";
import envConfig from "./env.config.js";

mongoose.set('strictQuery', true);
(async () => {
  try {
    await mongoose.connect(envConfig.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DATABASE CONNECTED");

    mongoose.connection.on("error", (err) => {
      console.log("DB connection failed!", err);
      throw err;
    });
  } catch (err) {
    console.log("ERROR ", err);
    throw err;
  }
})();
