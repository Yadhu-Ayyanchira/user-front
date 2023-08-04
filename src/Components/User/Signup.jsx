import { useState } from 'react'
import styles from './Signup.css'
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
            const url = "http://localhost:8080/api/users";
            const {data:res} = await axios.post(url,data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <=500){
                setError(error.response.data.message);
            }
        }
    }
    return (
      <div className={styles.Signup_container}>
        <div className={styles.Signup_form_container}>
          <div className={styles.left}>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="NAME"
                name="name"
                onChange={handleChange}
                value={data.name}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Mobile"
                name="mob"
                onChange={handleChange}
                value={data.mob}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type='submit' className={styles.green_btn}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
}