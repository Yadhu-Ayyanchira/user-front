import { useState } from 'react'
import './Signup.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () =>{
    const [data,setData] = useState({
        name:'',
        mob:'',
        email : '',
        password : '',
        is_admin:''
    })
    const [error,setError] = useState("")
    const navigate = useNavigate();
    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
          const response = await RegUser(value);
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <=500){
                setError(error.response.data.message);
            }
        }
    }
    return (
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Already have Account?</h1>
            <Link to="/login">
              <button type="button" className="white_btn">
                Sign in
              </button>
            </Link>
          </div>
          <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="NAME"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Mobile"
                name="mob"
                onChange={handleChange}
                value={data.mob}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
              />
              {error && <div className='error_msg'>{error}</div>}
              <button type="submit" className='green_btn'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Signup;