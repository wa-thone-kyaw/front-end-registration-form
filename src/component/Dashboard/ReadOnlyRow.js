import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.rollno}</td>
      <td>{contact.phoneNumber}</td>
      
      <td>
      <button type="button" class='btn btn-success btn-lg' onClick={() => handleDeleteClick(contact.id)}>
          View
        </button>
        <button
          type="button" class='btn btn-primary btn-lg'
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" class='btn btn-danger btn-lg' onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;