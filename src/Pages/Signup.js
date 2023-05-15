import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form
    setName("");
    setEmail("");
    setPassword("");
    // Navigate to the login page
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="signup-input"
          />
        </label>
        <br />
        <label className="signup-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="signup-input"
          />
        </label>
        <br />
        <label className="signup-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="signup-input"
          />
        </label>
        <br />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignupPage() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform signup logic here
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Reset the form
//     setName("");
//     setEmail("");
//     setPassword("");
//     // Navigate to the login page
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default SignupPage;
