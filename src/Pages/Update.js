import React from "react";

import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import Form from "../Form";

function Update() {
  const [versionNumber, setVersionNumber] = useState("");
  const [selectedECU, setSelectedECU] = useState("");

  const handleECUChange = (event) => {
    setSelectedECU(parseInt(event.target.value));
  };

  const handleVersionChange = (event) => {
    setVersionNumber(parseInt(event.target.value));
    // setVersionNumber(event.target.value);
  };

  const db = getDatabase();
  set(ref(db, `Node${selectedECU}`), {
    [`Node${selectedECU}_Version`]: versionNumber,
  });

  const nodeDb = getDatabase();
  set(ref(nodeDb, "Selected_Node"), {
    Selected_Node: selectedECU,
  });

  return (
    <>
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
        type="number"
        // name="textboxname"
        placeholder="Enter version number"
        value={versionNumber}
        onChange={handleVersionChange}
      />
      <Form />
    </>
  );
}

export default Update;
