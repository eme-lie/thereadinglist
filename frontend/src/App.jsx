import { Button } from "@/components/ui/button";
import BookItemList from "./custom_components/BookItemList";
import BookForm from "./custom_components/BookForm";

function App() {
  return (
    <>
      <h1 className="text-6xl">Set Up</h1>
      <p className="text-3xl">Just testing</p>
      <Button>Click me</Button>
      <BookItemList />
      <BookForm />
    </>
  );
}

export default App;
