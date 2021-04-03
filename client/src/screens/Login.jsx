import { useState } from "react";
import { Link } from "react-router-dom";
import "../screens-css/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-form-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3 id="login-title">Log In</h3>
        <label className="login-text">
          Username:
          <input
            className="login-field"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="login-text">
          Password:
          <input
            className="login-field"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button id="login-btn">Log In</button>
        </div>
        <div id="redirect-signup-from-login">
          <Link to="/signup">Don’t have an account? Sign up here!</Link>
        </div>
      </form>
    </div>
  );
}
