import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";



function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <div>
      <Navbar className="navcontainer" bg="#3bb19b" expand="lg">
        <Container>
          <Navbar.Brand href="#">User Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
            </Nav>
            <Button variant="dark" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home