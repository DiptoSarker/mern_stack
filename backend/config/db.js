import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://diptosarker802:2018331034@cluster0.uemvrff.mongodb.net/FoodShop"
    )
    .then(() => {
      console.log("DB is connected...!");
    });
};
