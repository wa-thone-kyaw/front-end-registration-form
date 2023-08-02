import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./FourthyearStudent.css";
import data from "../Dashboard/mock-data.json";
import ReadOnlyRow from "../Dashboard/ReadOnlyRow";
import EditableRow from "../Dashboard/EditableRow";
import axios from "axios";

export const FourthyearStudent = () => {
  const [showAddForm, setShowAddform] = useState(false);

  /* const [addFormData, setAddFormData] = useState({
    engname: "",
    seatno: "",
    phone_no: "",
  }); */
  const [engname, setEngname] = useState("");
  const [seatno, setSeatNo] = useState("");
  const [rollno, setRollNo] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [data, setData] = useState([]);

  //...
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/fourth_civil_list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      console.log("fetched data", jsonData);
      setData(jsonData.students);
      console.log("Fetched data", response.jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleToggleAddForm = () => {
    setShowAddform(!showAddForm);
  };

  const handleCancelAddForm = () => {
    /* setAddFormData({
      engname: "",
      seatno: "",
      phone_no: "",
    }); */
    setShowAddform(false);
  };
  //...

  const [editFormData, setEditFormData] = useState({
    engname: "",
    rollno: "",
    phone_no: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    /* const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue; */

    setAddFormData({ ...addFormData, [fieldName]: fieldValue });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("engname", engname);
    formData.append("rollno", rollno);
    formData.append("phone_no", phone_no);

    try {
      await fetch("http://127.0.0.1:8000/student_registration/fourth_year", {
        method: "POST",
        body: formData,
      });
      /* const newContact = { id: nanoid(), engname, seatno, phone_no };
      setContacts([...contacts, newContact]); */

      setEngname("");
      setRollNo("");
      setPhoneno("");
      fetchDataAsync();
    } catch (error) {
      console.error(error);
    }

    /* handleCancelAddForm(); */
    /* const newContacts = [...contacts, newContact];
    setContacts(newContacts); */
  };
  const handleViewClick = (event, item) => {
    event.preventDefault();

    // Handle the view action here
    console.log("View", item);
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      engname: editFormData.engname,
      rollno: editFormData.rollno,
      phone_no: editFormData.phone_no,
    };
    try {
      await axios.put(
        `http://127.0.0.1:8000/student_registration/update_student/${editContactId}`,
        editedContact
      );
      setEditContactId(null);
      fetchDataAsync(); // Fetch data again to update the table with the latest data from the database
    } catch (error) {
      console.error("Error occurred during update:", error);
    }

    /* const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null); */
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item._id);

    const formValues = {
      engname: item.engname,
      rollno: item.rollno,
      phone_no: item.phone_no,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    // Handle the delete action here
    console.log("Delete", contactId);
  };

  return (
    <div className="table">
      <div class="col-sm-3 mt-5 mb-4 text-gred">
        <div className="search">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Student"
            aria-label="Search"
          />
        </div>
      </div>
      <button onClick={handleToggleAddForm}>
        {showAddForm ? "Cancle" : "Add a Contact"}
      </button>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll-no</th>
              <th>Phone-no</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Fragment key={index}>
                {editContactId === item._id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <tr>
                    <td>{item.engname}</td>
                    <td>{item.rollno}</td>
                    <td>{item.phone_no}</td>
                    <td>
                      <button onClick={(e) => handleViewClick(e, item)}>
                        View
                      </button>
                      <button onClick={(e) => handleEditClick(e, item)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteClick(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      {showAddForm && (
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="engname"
            value={engname}
            required="required"
            placeholder="Enter a name..."
            onChange={(e) => setEngname(e.target.value)}
          />
          <input
            type="text"
            name="rollno"
            value={rollno}
            required="required"
            placeholder="Enter roll no..."
            onChange={(e) => setRollNo(e.target.value)}
          />
          <input
            type="text"
            name="phone_no"
            value={phone_no}
            required="required"
            placeholder="Enter a phone number..."
            onChange={(e) => setPhoneno(e.target.value)}
          />

          <button type="submit">Add</button>
          <button type="button" onClick={handleCancelAddForm}>
            Cancle
          </button>
        </form>
      )}
    </div>
  );
};
