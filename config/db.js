// importing mongoose to connect with MongoDB
const mongoose = require('mongoose');

// this is used to read variables from .env file
require('dotenv').config();

// function to connect database
const connectDB = async () => {
  try {
    // connecting to MongoDB using URL stored in .env file
    // (MONGO_URI contains our database connection string)
    await mongoose.connect(process.env.MONGO_URI);

    // if connection is successful
    console.log("MongoDB connected");
  } catch (err) {
    // if any error comes while connecting, print it
    console.log(err);
  }
};

// exporting this function so we can use it in server.js
module.exports = connectDB;