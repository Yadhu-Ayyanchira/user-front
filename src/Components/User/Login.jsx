
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../Redux/User/UserSlice";
import { UserLogin } from "../../Api/UserApi";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      if (!email) {
        setError("Enter email");
      } else if (!password) {
        setError("Enter password");
      } else {
        const response = await UserLogin(data);
        if (response.data.status === true) {
          localStorage.setItem("token", response.data.token);
          dispatch(
            setUserDetails({
              id: response.data.user._id,
              email: response.data.user.email,
              mob: response.data.user.mob,
              name: response.data.user.name,
              image: response.data.user.image,
            })
          );
          navigate("/");
        } else {
          setError(response.data.alert);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // ... Your JSX for the login form ...
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
              className="logininput"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
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

export default Login;
