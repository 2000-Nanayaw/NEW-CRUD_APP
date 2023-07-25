// import React, { useState } from "react";

// const Css = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [picture, setPicture] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", { name, email, picture });
//     setIsEditing(false);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleDelete = () => {
//     // Handle delete button logic here
//     console.log("Delete button clicked");
//     setName("");
//     setEmail("");
//     setPicture("");
//     setIsEditing(false);
//   };

//   const handleCopy = () => {
//     // Handle copy information logic here
//     const copiedInfo = `${name}, ${email}, ${picture}`;
//     navigator.clipboard.writeText(copiedInfo);
//     console.log("Information copied:", copiedInfo);
//   };

//   const handleViewDetails = () => {
//     // Handle view details logic here
//     console.log("View details button clicked");
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Picture:
//             <input
//               type="text"
//               value={picture}
//               onChange={(e) => setPicture(e.target.value)}
//             />
//           </label>
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div>
//           <p>Name: {name}</p>
//           <p>Email: {email}</p>
//           <p>Picture: {picture}</p>
//         </div>
//       )}
//       <button onClick={handleEdit}>Edit</button>
//       <button onClick={handleDelete}>Delete</button>
//       <button onClick={handleCopy}>Copy Information</button>
//       <button onClick={handleViewDetails}>View Details</button>
//     </div>
//   );
// };

// export default Css;

// import React, { useState } from "react";

// const LanguageForm = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("");

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log("Selected Language:", selectedLanguage);
//     // Perform any action with the selected language
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <h2>Select Language</h2>
//       <label>
//         Language:
//         <select value={selectedLanguage} onChange={handleLanguageChange}>
//           <option value="">-- Select Language --</option>
//           <option value="en">English</option>
//           <option value="fr">French</option>
//           <option value="es">Spanish</option>
//           <option value="de">German</option>
//         </select>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LanguageForm;
import React, { useState } from "react";

const FileInput = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div>
      <h2>File Input</h2>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
};

export default FileInput;
