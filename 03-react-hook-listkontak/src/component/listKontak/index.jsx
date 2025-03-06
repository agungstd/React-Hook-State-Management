// Importing necessary modules and hooks
import { useEffect } from "react";
import { useAppState } from "../../contexts/useAppState.jsx";
import { getKontakList } from "../../actions/kontakAction.jsx";
import { Table } from "react-bootstrap";

function ListKontak() {
  // Accessing the state and dispatch from the context
  const [state, dispatch] = useAppState();
  const { getKontakResult, getKontakLoading, getKontakError } = state;

  // Using useEffect to fetch the contact list when the component mounts
  useEffect(() => {
    getKontakList(dispatch);
  }, [dispatch]);

  return (
    <div>
      {/* Using Table component from react-bootstrap to display contact list */}
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Conditional rendering based on the state */}
          {getKontakResult ? (
            // Rendering contact list if data is available
            getKontakResult.map((kontak, index) => {
              return (
                <tr key={kontak.id}>
                  <td>{index + 1}</td>
                  <td>{kontak.nama}</td>
                  <td>{kontak.nohp}</td>
                  <td>Action ...</td>
                </tr>
              );
            })
          ) : getKontakLoading ? (
            // Displaying loading message if data is being fetched
            <tr>
              <td colSpan={4}>Loading ...</td>
            </tr>
          ) : (
            // Displaying error message or no data message if there is an error or no data available
            <tr>
              <td colSpan={4}>
                {getKontakError ? getKontakError : "Data Not Available"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ListKontak;
