const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_STRNG);
    console.log(`Server is Connected with ${conn.connection.host} Database`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

module.exports = connectDB;
