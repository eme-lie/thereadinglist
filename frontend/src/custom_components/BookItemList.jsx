import BookItem from "./BookItem";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BookContext } from "@/context/BookContext";
import { ToggleLeft, ToggleRight } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

const BookItemList = () => {
  // Access the theme state and dispatch function from ThemeContext
  const { state: theme, dispatch: themeDispatch } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const { text } = isLightTheme ? light : dark;

  // Access the books state and dispatch function from BookContext
  const { state: books, dispatch: bookDispatch } = useContext(BookContext);

  // Save the current theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(theme));
  }, [theme]);

  // Fetch the list of books from the API when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/reading-list"
        );
        // Dispatch an action to update the books state with the fetched data
        bookDispatch({ type: "GET_BOOKS", books: data });
        console.log("Books:", books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className={`text-3xl font-bold mb-4 ${text}`}>
          Charles Reading List
        </h1>
        {/**/}
        {/* Toggle between light and dark themes */}
        {isLightTheme ? (
          <ToggleLeft
            onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
            className={`${text}`}
          />
        ) : (
          <ToggleRight
            onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
            className={`${text}`}
          />
        )}
      </div>

      <p className={`mb-4 ${text}`}>
        Currently you have {books.length} book{books.length === 1 ? "" : "s"} to
        get through...
      </p>
      <div className="flex flex-col max-h-72 overflow-y-auto">
        {/* Render the list of books */}
        {books.map(
          (book) => (
            console.log("Book:", book),
            (
              <BookItem
                key={book._id}
                author={book.author}
                title={book.title}
                _id={book._id}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default BookItemList;
