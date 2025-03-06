// Importing the GET_KONTAK_LIST action type
import { GET_KONTAK_LIST } from "../../actions/kontakAction.jsx";

// Defining the kontak reducer function
const kontak = (state, action) => {
  // Destructuring the type from the action object
  const { type } = action;
  
  // Using a switch statement to handle different action types
  switch (type) {
    case GET_KONTAK_LIST:
      // Returning a new state object with updated values based on the action payload
      return {
        ...state,
        getKontakResult: action.payload.data,
        getKontakLoading: action.payload.loading,
        getKontakError: action.payload.errorMessage,
      };
      
    default:
      // Returning the current state if the action type is not recognized
      return state;
  }
};

// Exporting the kontak reducer as the default export
export default kontak;
