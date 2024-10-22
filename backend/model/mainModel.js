import mongoose from "mongoose";

// Define the schema for the reading list
const readingListSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Create the model from the schema
const ReadingList = mongoose.model("ReadingList", readingListSchema);

export default ReadingList;
