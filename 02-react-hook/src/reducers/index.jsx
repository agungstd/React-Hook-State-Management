// Importing the kontakReducers from the kontak.js file
import kontakReducers from "./kontak";

// Defining the initial state of the application
const initialState = {
  getKontakResult: false, // Holds the result of getting contacts (initially false)
  getKontakLoading: false, // Holds the loading state of getting contacts (initially false)
  getKontakError: false,   // Holds the error state of getting contacts (initially false)
};

// Defining the combineReducers function, which takes a dictionary of reducers as input
const combineReducers = (reducers) => {
  return (state, action) => {
    // Using reduce to iterate over each property in the reducers object
    return Object.keys(reducers).reduce((acc, prop) => {
      // Combining each reducer's result into the accumulated state
      return {
        ...acc,
        ...reducers[prop]({ [prop]: state[prop] }, action),
      };
    }, state); // The initial value of the accumulator is the current state
  };
};

// Combining reducers into a single appReducers function
const appReducers = combineReducers({
  kontakReducers,
});

// Exporting the initial state, appReducers, and combineReducers for use in other parts of the application
export { initialState, appReducers, combineReducers };
