import mongoose from "mongoose";
import "dotenv";

const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.b5rmtao.mongodb.net/`;

try {
  mongoose.connect(URI);
  console.log("Conneted to DB");
} catch (error) {
  console.log(error.message);
}
