import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Api/AdminApi";
import { Toast } from "primereact/toast";
        


function AddUser() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error,setError] = useState('');
  const toast = useRef(null);
  
  const generateError = (err)=>{
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: err,
      life: 2000
    });
  }

  const navigate = useNavigate();
  const { name, email, mobile, password } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError('Enter name')
      generateError('enter name')
    } else if (!email) {
      setError("Enter email");
    } else if (!mobile) {
      setError("Enter number");
    } else if (!password) {
      setError("Enter password");
    } else {
      const response = await addUser(value);
      console.log(response.data.alert);
      if (response.data.status) {
        navigate("/admin/home");
      }
    }
  };
  return (
    <div className="">
      <Toast ref={toast} />
      <Navbar className="adminnavcontainer bg-body-tertiary">
        <Container>
          <Navbar.Brand>ADMIN</Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <div className="logincontainer">
        <div className="formOuter1 d-flex justify-content-center align-items-center">
          <Form className="form col-lg-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                placeholder="Enter Name"
                name="name"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                id="mobile"
                placeholder="Enter Mobile No"
                name="mobile"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            {error && <div className="error_msg">{error}</div>}
            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
            <hr />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;