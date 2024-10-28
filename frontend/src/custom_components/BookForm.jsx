import axios from "axios";
import { useState, useContext } from "react";
import { BookContext } from "@/context/BookContext";
import { ThemeContext } from "@/context/ThemeContext";

const BookForm = () => {
  // State variables for the book title and author
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Access the dispatch function from BookContext
  const { dispatch } = useContext(BookContext);

  // Access the theme state from ThemeContext
  const { state } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = state;
  const { text, item_bg, placeholder, button_bg } = isLightTheme ? light : dark;

  // Function to add a new book to the reading list
  const addBook = async () => {
    try {
      // Send a POST request to add the book
      const { data } = await axios.post(
        "http://localhost:4000/api/reading-list",
        {
          title,
          author,
        }
      );
      console.log("Book added:", data);
      // Dispatch an action to add the book to the context state
      dispatch({ type: "ADD_BOOK_ITEM", bookItem: data });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook();
      // Clear the input fields after adding the book
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {/* Input field for the book title */}
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`w-full p-2 mb-2 ${item_bg} ${text} ${placeholder} rounded`}
      />
      {/* Input field for the book author */}
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={`w-full p-2 mb-2 ${item_bg} ${text} ${placeholder} rounded`}
      />
      {/* Submit button to add the book */}
      <button
        type="submit"
        className={`w-full p-2 bg-blue-500 ${text} rounded hover:bg-blue-600 transition-colors ${button_bg}`}
      >
        Add book
      </button>
    </form>
  );
};

export default BookForm;
