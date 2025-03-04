// Importing the Parent2 component from the Parent2.jsx file
import Parent2 from "./Parent2.jsx";
// Importing the PropTypes library to define prop types for the component
import PropTypes from "prop-types";

// Defining the Parent1 functional component, which takes 'nama' as a prop
function Parent1({ nama }) {
  return (
    // Returning a JSX element containing an <h1> tag
    // Inside the <h1> tag, there's a <div> element with text "Parent1"
    // and the Parent2 component, passing the 'nama' prop to it
    <h1>
      <div>Parent1</div>
      <Parent2 nama={nama} />
    </h1>
  );
}

// Defining the prop types for the Parent1 component
Parent1.propTypes = {
  // The 'nama' prop is expected to be a string
  nama: PropTypes.string,
};

// Exporting the Parent1 component as the default export of this module
export default Parent1;
