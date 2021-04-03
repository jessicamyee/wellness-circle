import { useState } from "react";
import "../screens-css/SignUp.css";

export default function SignUp(props) {
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const { username, firstName, lastName, password, confirmPassword } = formData;
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
          if (formData.password === formData.confirmPassword) {
            handleSignUp(formData);
          }
          else {
            setErrors('Passwords do not match');
          }
        }}
      >
        <h3 id="signup-title">Sign Up</h3>
        <p id="signup-intro">Create your free Wellness Circle Account</p>
        <label className="signup-text">
          Username:
          <input
            className="signup-field"
            required
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
            required
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
            required
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
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="signup-text">
          Confirm Password:
          <input
            className="signup-field"
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>
        {errors && <div className='pwd-mismatch-msg'>{errors}</div>}

        <br />
        <button id="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}
