import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import ThemeReducer from "@/reducer/ThemeReducer.jsx";

export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: {
    text: "text-blue-100",
    item_bg: "bg-blue-800",
    bg: "bg-blue-900",
    input_bg: "bg-blue-700",
    button_bg: "bg-blue-500",
    placeholder: "placeholder-blue-300",
  },
  dark: {
    text: "text-gray-100", // Light gray text on dark backgrounds
    item_bg: "bg-gray-800", // Dark background for items
    bg: "bg-gray-900", // Very dark background color
    input_bg: "bg-gray-700", // Medium-dark background for input fields
    button_bg: "bg-gray-600", // Darker button background for contrast
    placeholder: "placeholder-gray-400", // Light gray for placeholder text
  },
};
const ThemeContextStore = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState, () => {
    const localData = localStorage.getItem("currentTheme");
    return localData ? JSON.parse(localData) : initialState;
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextStore;
