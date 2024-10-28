const BookReducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return action.books;
    case "ADD_BOOK_ITEM":
      return [
        ...state,
        {
          title: action.bookItem.title,
          author: action.bookItem.author,
          _id: action.bookItem._id,
        },
      ];
    case "REMOVE_BOOK_ITEM":
      return state.filter((item) => item._id !== action.id);

    default:
      break;
  }
};

export default BookReducer;
