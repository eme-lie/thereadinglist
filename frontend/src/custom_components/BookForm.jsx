import axios from "axios";
import React, { useState, useContext } from "react";
import { BookContext } from "@/context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);

  const addBook = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/reading-list",
        {
          title,
          author,
        }
      );
      console.log("Book added:", data);
      dispatch({ type: "ADD_BOOK_ITEM", bookItem: data });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook();
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 bg-blue-700 text-blue-100 placeholder-blue-300 rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 mb-2 bg-blue-700 text-blue-100 placeholder-blue-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-blue-100 rounded hover:bg-blue-600 transition-colors"
      >
        Add book
      </button>
    </form>
  );
};

export default BookForm;
