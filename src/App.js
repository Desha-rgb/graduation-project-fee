import "./App.css";
// import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [textboxValue, setTextboxValue] = useState("");
  const [selectedECU, setSelectedECU] = useState("");

  const handleECUChange = (event) => {
    setSelectedECU(event.target.value);
  };

  const handleTextBoxChange = (event) => {
    setTextboxValue(event.target.value);
  };
  const db = getDatabase();
  set(ref(db, `Node${selectedECU}`), {
    Node_Version: textboxValue,
  });

  return (
    <div className="App">
      <h1>Update your car features</h1>
      <label>Select target node: </label>
      <select value={selectedECU} onChange={handleECUChange}>
        <option value="">--Please choose an option--</option>
        <option value="1">ECU1</option>
        <option value="2">ECU2</option>
        <option value="3">ECU3</option>
      </select>
      <br />
      <br />
      <label>Version number: </label>
      <input
        type="text"
        // name="textboxname"
        placeholder="Enter version number"
        value={textboxValue}
        onChange={handleTextBoxChange}
      />
      <Form />
      <br />
      <br />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytesResumable } from "firebase/storage";

// // import firebase from "firebase/app";
// // import "firebase/database";

// function App() {
//   const [fileContents, setFileContents] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const file = event.target.files[0];
//     console.log(file);

//     const reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = () => {
//       setFileContents(reader.result);
//     };
//     const storageRef = ref(storage, `files/${file.name}`);
//     uploadBytesResumable(storageRef, file).set(fileContents);
//   };

//   // const handleSubmit = () => {

//   //   firebase.database().ref("files/file1").set(fileContents);
//   // };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" /> <br />
//         <br />
//         <button type="submit">Upload</button>
//         <br />
//       </form>
//       {/* <input type="file" onChange={handleFileUpload} /> */}
//       {/* <button onClick={handleSubmit}>Submit</button> */}
//     </div>
//   );
// }

// export default App;
