import { Button } from "@/components/ui/button";

const BookForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
        <Button>Add Book</Button>
      </form>
    </div>
  );
};

export default BookForm;
