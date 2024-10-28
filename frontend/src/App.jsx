// Import necessary components and context
//import { Button } from "@/components/ui/button";
import BookItemList from "./custom_components/BookItemList";
import BookForm from "./custom_components/BookForm";
import BookContextStore from "./context/BookContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function App() {
  // Access the theme state from ThemeContext
  const { state } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = state;
  const { bg } = isLightTheme ? light : dark;

  return (
    // Apply the background color based on the current theme
    <div className={`min-h-screen ${bg} p-8`}>
      <div className="max-w-md mx-auto">
        {/* Provide the BookContext to the child components */}
        <BookContextStore>
          {/* Render the list of books */}
          <BookItemList />
          {/* Render the form to add a new book */}
          <BookForm />
        </BookContextStore>
      </div>
    </div>
  );
}

export default App;
