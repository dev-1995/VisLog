import mongoose, { Schema } from "mongoose";
import { load as loadEnv } from "dotenv";
loadEnv();
console.log(process.env.MONGO_URL);
const MDB = `mongodb://${process.env.MONGO_URL}`;

mongoose
  .connect(
    MDB,
    {
      user: process.env.MONGO_USR,
      pass: process.env.MONGO_PWD,
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

export default mongoose;
