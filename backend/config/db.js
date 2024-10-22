import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");

    // Retrieve MongoDB URI from environment variables
    const MONGO_URI = process.env.MONGO_URI;

    // Check if MONGO_URI is defined
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    // Connection parameters for MongoDB
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds,
    };

    // Attempt to connect to MongoDB
    const conn = await mongoose.connect(MONGO_URI, connectionParams);

    // Check if connection is successful
    if (!conn) {
      throw new Error("Failed to connect to MongoDB");
    }

    // Log successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error and exit process with failure
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
