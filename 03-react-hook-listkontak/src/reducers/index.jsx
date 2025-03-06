// Importing the kontakReducers module
import kontakReducers from "./kontak";

// Defining the initial state for the reducers
const initialState = {
  getKontakResult: false,
  getKontakLoading: false,
  getKontakError: false,
};

// Defining a function to combine multiple reducers
const combineReducers = (reducers) => {
  // Returning a new function that takes the current state and an action as arguments
  return (state, action) => {
    // Reducing the reducers object to create a new state object
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        // Calling each reducer with the corresponding state slice and action
        ...reducers[prop]({ [prop]: state[prop] }, action),
      };
    }, state);
  };
};

// Combining the kontakReducers with the combineReducers function
const appReducers = combineReducers({
  kontakReducers,
});

// Exporting the initial state, appReducers, and combineReducers function
export { initialState, appReducers, combineReducers };
