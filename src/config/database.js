import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://shubhamkhuntia:shubhamkhuntia@cluster0.bnb1o27.mongodb.net/"
  );
};
