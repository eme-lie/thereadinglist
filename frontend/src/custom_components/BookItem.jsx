const BookItem = ({ author, title }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{title}</p>
    </div>
  );
};

export default BookItem;
