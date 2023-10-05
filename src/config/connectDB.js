import "dotenv/config";
import mongoose from "mongoose";

export default () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("Connect db successfully"))
    .catch((err) => console.error(err));
};
