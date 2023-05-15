import "./App.css";
// import { useState } from "react";

import NavigationBar from "./Components/Navigation";
import Update from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Update />
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
