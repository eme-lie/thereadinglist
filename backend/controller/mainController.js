import ReadingList from "../model/mainModel.js";

// Create a new reading list item
export const createReadingListItem = async (req, res) => {
  const { author, title } = req.body;

  // Validate the request body
  if (!author || !title) {
    return res.status(400).json({ message: "Missing required field(s)" });
  }

  const readingListItem = new ReadingList({
    author,
    title,
  });

  try {
    // Save the new item to the database
    const savedReadingListItem = await readingListItem.save();

    // Check if the item was saved successfully
    if (!savedReadingListItem) {
      throw new Error("Error saving reading list item");
    }

    // Send the saved item as a response
    res.status(201).json(savedReadingListItem);
  } catch (error) {
    // Send an error response to the client
    res.status(409).json({ message: error.message });
  }
};

/// Get all reading list items
export const getReadingListItems = async (req, res) => {
  try {
    // Fetch all reading list items from the database
    const readingListItems = await ReadingList.find();

    // Check if reading list items were fetched successfully
    if (!readingListItems) {
      // Throw an error if no items were found
      throw new Error("Error fetching reading list items");
    }

    // Send the fetched items as a response with status 200 (OK)
    res.status(200).json(readingListItems);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    // Send an error response with status 404 (Not Found) and the error message
    res.status(404).json({ message: error.message });
  }
};

export const getReadingListItem = async (req, res) => {
  // Extract the id parameter from the request
  const { id } = req.params;

  // Validate the id parameter
  if (!id) {
    // Return a 400 Bad Request response if the id is missing
    return res.status(400).json({ message: "Missing required id" });
  }

  try {
    // Fetch the reading list item by id from the database
    const readingListItem = await ReadingList.findById(id);

    // Check if the reading list item exists
    if (!readingListItem) {
      // Throw an error if the item is not found
      throw new Error("Reading list item not found");
    }

    // Return the reading list item with a 200 OK response
    res.status(200).json(readingListItem);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    // Return a 404 Not Found response with the error message
    res.status(404).json({ message: error.message });
  }
};

export const deleteReadingListItem = async (req, res) => {
  // Extract the id parameter from the request
  const { id } = req.body;

  // Validate the id parameter
  if (!id) {
    // Return a 400 Bad Request response if the id is missing
    return res.status(400).json({ message: "Missing required id" });
  }

  try {
    // Attempt to delete the reading list item by id from the database
    const deletedItem = await ReadingList.findByIdAndDelete(id);

    // Check if the reading list item was found and deleted
    if (!deletedItem) {
      // Throw error if the item is not found
      throw new Error("Reading list item not found");
    }

    // Return a success message and the deleted item
    res.json({ message: "Reading list item deleted", item: deletedItem });
  } catch (error) {
    // Handle any errors that occur during the delete operation
    // Return a 500 Internal Server Error response with the error message
    res.status(500).json({ message: error.message });
  }
};

export const updateReadingListItem = async (req, res) => {
  // Extract the id parameter from the request
  const { id } = req.params;
  // Extract the author and title from the request body
  const { author, title } = req.body;

  // Validate the id, author, and title parameters
  if (!id || !author || !title) {
    // Return a 400 Bad Request response if any required field is missing
    return res.status(400).json({ message: "Missing a required field" });
  }

  try {
    // Create a new reading list item object with the provided author, title, and id
    const readingListItem = { author, title, _id: id };

    // Check if the reading list item object is null or undefined
    if (!readingListItem) {
      // Throw an error if the reading list item object is not found
      throw new Error("Reading list item not found");
    }

    // Attempt to update the reading list item in the database
    const updatedItem = await ReadingList.findByIdAndUpdate(
      id,
      readingListItem,
      { new: true } // Return the updated document
    );

    // Check if the reading list item was updated successfully
    if (!updatedItem) {
      // Throw an error if the item is not found
      throw new Error("Error updating reading list item");
    }

    // Return the updated reading list item with a 200 OK response
    res.status(200).json(updatedItem);
  } catch (error) {
    // Handle any errors that occur during the update operation
    // Return a 404 Not Found response with the error message
    res.status(404).json({ message: error.message });
  }
};
