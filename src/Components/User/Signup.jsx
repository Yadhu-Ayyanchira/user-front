import { useState } from 'react'
import './Signup.css'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserReg } from '../../Api/UserApi'
import { setUserDetails } from '../../Redux/User/UserSlice'

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
    const dispatch = useDispatch();
    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
          const {email,password,name,mob} = data
          if (!email) {
            console.log("no email");
            setError("Email is required");
          } else if (!password) {
            setError("Password is required")
          } else if (!name) {
            setError("Name is required");
          } else if (!mob) {
            setError("Number is required");
          } else {
            const response = await UserReg(data);
            if(response.data.status){
              localStorage.setItem("token",response.data.token)
              dispatch(
                setUserDetails({
                  id: response.data.user._id,
                  name: response.data.user.name,
                  email: response.data.user.email,
                  mob: response.data.user.mob,
                  is_admin: response.data.user.is_admin,
                  image: response.data.user.image,
                })
              );
              navigate('/');
            }
          }
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
                className="input"
              />
              <input
                type="text"
                placeholder="Mobile"
                name="mob"
                onChange={handleChange}
                value={data.mob}
                className="input"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                className="input"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
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