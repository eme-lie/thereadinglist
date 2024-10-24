//import { Button } from "@/components/ui/button";
import BookItemList from "./custom_components/BookItemList";
import BookForm from "./custom_components/BookForm";

function App() {
  return (
    <div className="min-h-screen bg-blue-900 text-blue-100 p-8">
      <div className="max-w-md mx-auto">
        <BookItemList />
        <BookForm />
      </div>
    </div>
  );
}

export default App;
