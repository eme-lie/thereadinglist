import BookItem from "./BookItem";
import { useState, useEffect } from "react";
import axios from "axios";

const BookItemList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/reading-list"
        );
        setBooks(data);
        console.log("Books:", books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Ninja Reading List</h1>
      <p className="mb-4">
        Currently you have {books.length} book{books.length === 1 ? "" : "s"} to
        get through...
      </p>
      <div className="flex flex-col max-h-72 overflow-y-auto">
        {books.map(
          (book) => (
            console.log("Book:", book),
            (
              <BookItem
                key={book._id}
                author={book.author}
                title={book.title}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default BookItemList;
