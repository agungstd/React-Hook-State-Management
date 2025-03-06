// Importing axios library for making HTTP requests
import axios from "axios";

// Defining a constant variable for the action type
export const GET_KONTAK_LIST = "GET_KONTAK_LIST";

// Asynchronous function to fetch the contact list
export const getKontakList = async (dispatch) => {
  // Dispatching an action to indicate that the request is in progress
  dispatch({
    type: GET_KONTAK_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  try {
    // Sending a GET request to the specified URL with a timeout of 120000 milliseconds (2 minutes)
    const response = await axios.get("http://localhost:3000/kontaks", {
      timeout: 120000,
    });
    // Dispatching an action with the response data if the request is successful
    dispatch({
      type: GET_KONTAK_LIST,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
  } catch (error) {
    // Dispatching an action with an error message if the request fails
    dispatch({
      type: GET_KONTAK_LIST,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  }
};
