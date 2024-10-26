import { createContext, useReducer } from "react";
import BookReducer from "@/reducer/BookReducer.jsx";
import PropTypes from "prop-types";

export const BookContext = createContext();

const BookContextStore = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(BookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

BookContextStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BookContextStore;
