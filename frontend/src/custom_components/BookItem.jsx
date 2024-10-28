import { EllipsisVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { BookContext } from "@/context/BookContext";
import { ThemeContext } from "@/context/ThemeContext";
import axios from "axios";

// BookItem component to display individual book details
const BookItem = ({ author, title, _id }) => {
  // Access the theme state from ThemeContext
  const { state: theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const { text, item_bg } = isLightTheme ? light : dark;

  // Access the dispatch function from BookContext
  const { dispatch } = useContext(BookContext);

  // Function to delete a book from the reading list
  const deleteBook = async () => {
    try {
      // Send a DELETE request to remove the book
      const { data } = await axios.delete(
        `http://localhost:4000/api/reading-list`,
        { data: { id: _id } }
      );
      console.log("Book deleted:", data);
      // Dispatch an action to remove the book from the context state
      dispatch({ type: "REMOVE_BOOK_ITEM", id: _id });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div
      className={`${item_bg} p-4 mb-2 rounded-lg flex justify-between items-center`}
    >
      <div>
        {/* Display the book author */}
        <h3 className={`${text} font-bold`}>{author}</h3>
        {/* Display the book title */}
        <p className={`${text}`}>by {title} </p>
      </div>

      <div className="flex gap-x-2">
        <Popover>
          <PopoverTrigger>
            {/* Trigger for the popover menu */}
            <EllipsisVertical className={`${text}`} />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              {/* Option to update the book */}
              <p className={`${text} p-2`}>Update</p>
              {/* Option to delete the book */}
              <p className={`${text} p-2`} onClick={deleteBook}>
                Delete
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default BookItem;
