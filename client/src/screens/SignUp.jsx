import { useState } from "react";
import "../screens-css/SignUp.css";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { username, firstName, lastName, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-form-container">
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(formData);
        }}
      >
        <h3 id="signup-title">Sign Up</h3>
        <label className="signup-text">
          Username:
          <input
            className="signup-field"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="signup-text">
          First Name:
          <input
            className="signup-field"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="signup-text">
          Last Name:
          <input
            className="signup-field"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="signup-text">
          Password:
          <input
            className="signup-field"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button id="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}
