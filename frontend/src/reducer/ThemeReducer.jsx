// Define the ThemeReducer function to manage theme state
const ThemeReducer = (state, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // Handle the "TOGGLE_THEME" action type
    case "TOGGLE_THEME":
      // Return a new state object with the isLightTheme property toggled
      return { ...state, isLightTheme: !state.isLightTheme };
    // Handle any other action types (default case)
    default:
      // Return the current state unchanged
      return state;
  }
};

// Export the ThemeReducer function as the default export
export default ThemeReducer;
