import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import axios from 'axios';

function Login() {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:8080/api/auth";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    };
  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="loginleft">
          <form className="loginform_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="logininput"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="logininput"
            />
            {error && <div className="loginerror_msg">{error}</div>}
            <button type="submit" className="logingreen_btn">
              Sing In
            </button>
          </form>
        </div>
        <div className="loginright">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="loginwhite_btn">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login