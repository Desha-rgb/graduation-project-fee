import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import Form from "../Components/Form";
import "./Update.css";

function Update() {
  const [versionNumber, setVersionNumber] = useState("");
  const [selectedECU, setSelectedECU] = useState("");

  const handleECUChange = (event) => {
    setSelectedECU(parseInt(event.target.value));
  };

  const handleVersionChange = (event) => {
    setVersionNumber(parseInt(event.target.value));
  };

  const handleUpdate = () => {
    const db = getDatabase();
    set(ref(db, `Node${selectedECU}`), {
      [`Node${selectedECU}_Version`]: versionNumber,
    });

    const nodeDb = getDatabase();
    set(ref(nodeDb, "Selected_Node"), {
      Selected_Node: selectedECU,
    });
  };

  return (
    <div className="update-container">
      <h1 className="update-heading">Update your car features</h1>
      <label className="update-label">Select target node:</label>
      <select
        value={selectedECU}
        onChange={handleECUChange}
        className="update-select"
      >
        <option value="">--Please choose an option--</option>
        <option value="1">ECU1</option>
        <option value="2">ECU2</option>
        <option value="3">ECU3</option>
      </select>
      <br />
      <br />
      <label className="update-label">Version number:</label>
      <input
        type="number"
        placeholder="Enter version number"
        value={versionNumber}
        onChange={handleVersionChange}
        className="update-input"
      />
      <button onClick={handleUpdate} className="update-button">
        Update
      </button>
      <Form />
    </div>
  );
}

export default Update;

// Without Style
// import React from "react";

// import { getDatabase, ref, set } from "firebase/database";
// import { useState } from "react";
// import Form from "../Components/Form";

// function Update() {
//   const [versionNumber, setVersionNumber] = useState("");
//   const [selectedECU, setSelectedECU] = useState("");

//   const handleECUChange = (event) => {
//     setSelectedECU(parseInt(event.target.value));
//   };

//   const handleVersionChange = (event) => {
//     setVersionNumber(parseInt(event.target.value));
////     setVersionNumber(event.target.value);
//   };

//   const db = getDatabase();
//   set(ref(db, `Node${selectedECU}`), {
//     [`Node${selectedECU}_Version`]: versionNumber,
//   });

//   const nodeDb = getDatabase();
//   set(ref(nodeDb, "Selected_Node"), {
//     Selected_Node: selectedECU,
//   });

//   return (
//     <>
//       <h1>Update your car features</h1>
//       <label>Select target node: </label>
//       <select value={selectedECU} onChange={handleECUChange}>
//         <option value="">--Please choose an option--</option>
//         <option value="1">ECU1</option>
//         <option value="2">ECU2</option>
//         <option value="3">ECU3</option>
//       </select>
//       <br />
//       <br />
//       <label>Version number: </label>
//       <input
//         type="number"
//         // name="textboxname"
//         placeholder="Enter version number"
//         value={versionNumber}
//         onChange={handleVersionChange}
//       />
//       <Form />
//     </>
//   );
// }

// export default Update;
