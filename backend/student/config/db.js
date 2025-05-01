const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });  // Specify the path to the .env file

const connectDB = async () => {
  try {
    // Use the MONGO_URI from the .env file
    const mongoURI = process.env.MONGO_URI;
    
    if (!mongoURI) {
      console.error("MongoDB URI is not defined in the .env file");
      process.exit(1);
    }
    
    // Connect to MongoDB using the URI from the environment variable
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
