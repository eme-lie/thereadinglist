import { EllipsisVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { BookContext } from "@/context/BookContext";
import axios from "axios";

const BookItem = ({ author, title, _id }) => {
  const { dispatch } = useContext(BookContext);

  const deleteBook = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/reading-list`,
        { data: { id: _id } }
      );
      console.log("Book deleted:", data);
      dispatch({ type: "REMOVE_BOOK_ITEM", id: _id });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div className="bg-blue-800 p-4 mb-2 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-blue-100 font-bold">{author}</h3>
        <p className="text-blue-200">by {title} </p>
      </div>

      <div className="flex gap-x-2">
        <Popover>
          <PopoverTrigger>
            <EllipsisVertical />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <p className="p-2">Update</p>
              <p className="p-2" onClick={deleteBook}>
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
