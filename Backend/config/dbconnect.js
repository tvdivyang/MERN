const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected sucessfully");
  } catch (error) {
    console.log(`database error ${error}`);
  }
};

module.exports = {
  dbConnect,
};
