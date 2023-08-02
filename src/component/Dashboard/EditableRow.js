import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="engname"
          value={editFormData.engname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="rollno"
          value={editFormData.rollno}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phone_no"
          value={editFormData.phone_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" class="btn btn-success btn-lg">
          Save
        </button>
        <button
          type="button"
          class="btn btn-danger btn-"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
