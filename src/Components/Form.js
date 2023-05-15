import { storage } from "../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import "./Form.css";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `${file.name}`);

    uploadBytesResumable(storageRef, file);
    console.log(file);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="file-label">
          <input type="file" className="file-input" />
          <span className="file-text">Choose File</span>
        </label>
        <br />
        <br />
        <button type="submit" className="upload-button">
          Upload
        </button>
        <br />
      </form>
    </>
  );
}

export default Form;

//Without style:
// import { storage } from "./firebase";
// import { ref, uploadBytesResumable } from "firebase/storage";

// function Form() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const file = e.target[0]?.files[0];

//     if (!file) return;

//     const storageRef = ref(storage, `${file.name}`);

//     uploadBytesResumable(storageRef, file);
//     console.log(file);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="file" /> <br />
//         <br />
//         <button type="submit">Upload</button>
//         <br />
//       </form>
//     </>
//   );
// }

// export default Form;
