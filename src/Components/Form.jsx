import React, { useState } from "react";
// import "./Form.css"; // Import CSS file for styling

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, picture, password });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
    setName("");
    setEmail("");
    setPicture("");
    setPassword("");
    setIsEditing(false);
  };

  const handleCopy = () => {
    const copiedInfo = `${name}, ${email}, ${picture}, ${password}`;
    navigator.clipboard.writeText(copiedInfo);
    console.log("Information copied:", copiedInfo);
  };

  const handleViewDetails = () => {
    console.log("View details button clicked");
  };

  return (
    <div className="form-container">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Picture:
            <input
              type="text"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="view-form">
          <p>
            <span className="label">Name:</span> {name}
          </p>
          <p>
            <span className="label">Email:</span> {email}
          </p>
          <p>
            <span className="label">Picture:</span> {picture}
          </p>
          <p>
            <span className="label">Password:</span> ******
          </p>
        </div>
      )}
      <div className="button-container">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="copy-button" onClick={handleCopy}>
          Copy Information
        </button>
        <button className="details-button" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Form;
